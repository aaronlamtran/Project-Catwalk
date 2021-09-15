import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionModal from '../Shared/QuestionModal';
import Form from './Form';

class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInProgress: false,
      count: 4,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.handleDisplayUnitOnSearch = this.handleDisplayUnitOnSearch.bind(this);
    this.getResultFromSearch = this.getResultFromSearch.bind(this);
    this.handleDisplayMoreQ = this.handleDisplayMoreQ.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleDisplayUnitOnSearch(e) {
    if (e.length >= 3) {
      this.setState({ isSearchInProgress: true });
    } else {
      this.setState({ isSearchInProgress: false });
    }
  }

  handleDisplayMoreQ() {
    const { count } = this.state;
    this.setState({ count: count + 2 });
  }

  getQuestions() {
    const { currentProduct } = this.props;
    axios(`http://localhost:3004/qa/questions/${currentProduct}`, { params: { count: 25 } })
      .then((results) => this.setState({
        isQuestionsLoaded: true,
        questionsList: results.data.results,
      }))
      .catch(() => this.setState({ isQuestionsLoaded: false }));
  }

  getResultFromSearch(resultArr) {
    this.setState({ searchResult: resultArr });
  }

  render() {
    const {
      isQuestionsLoaded, questionsList, isSearchInProgress, searchResult, count,
    } = this.state;
    let list;
    const { currentProduct } = this.props;
    if (isQuestionsLoaded && !isSearchInProgress) {
      list = questionsList.map((q) => (
        <Question
          className="question-component"
          key={q.question_id}
          question_id={q.question_id}
          question_body={q.question_body}
          question_date={q.question_date}
          asker_name={q.asker_name}
          question_helpfulness={q.question_helpfulness}
          answers={q.answers}
        />
      )).slice(0, count);
    } else if (isSearchInProgress) {
      list = searchResult.map((q) => (
        <Question
          className="question-component"
          key={q.question_id}
          question_id={q.question_id}
          question_body={q.question_body}
          question_date={q.question_date}
          asker_name={q.asker_name}
          question_helpfulness={q.question_helpfulness}
          answers={q.answers}
        />
      )).slice(0, count);
      console.log('question length2', list.length);
    }
    return (
      <div>
        <Form
          questionsList={questionsList}
          handleDisplayUnitOnSearch={this.handleDisplayUnitOnSearch}
          getResultFromSearch={this.getResultFromSearch}
        />
        {list}
        <div>
          <br />
          <br />
          <QuestionModal currentProduct={currentProduct} />
          <div>
            <button type="submit" onClick={this.handleDisplayMoreQ}>Load More Questions</button>
          </div>
        </div>
      </div>
    );
  }
}

Unit.propTypes = {
  currentProduct: PropTypes.number,

};
Unit.defaultProps = {
  currentProduct: '',

};

export default Unit;
