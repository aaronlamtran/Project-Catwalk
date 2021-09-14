import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = ({
  question_id, question_body, question_date, asker_name, question_helpfulness, answers,
}) => {
  const answersForCurrentQ = Object.keys(answers);
  return (

    <div key={question_id}>
      <a><strong>Q:</strong></a>
      {question_body}
      By:
      {asker_name}
      ,
      {' '}
      {question_date}
      | Helpful?
      <a onClick="toggleFn">Yes</a>
      {' '}
      {/* {//TODO onclick toggleFn for "YES"} */}
      {' '}
      (
      {question_helpfulness}
      ) |
      {' '}
      <a onClick="modal for add answer">Add Answer</a>
      {' '}
      {/* //TODO onlick modal for "Add Answer" */}
      {' '}
      {answersForCurrentQ.length > 0 ? <Answer /> : 'No Answers For this Q'}
    </div>
  );
};

// Question.propTypes = {
//   allQuestions:
//     PropTypes.shape({
//       question_id: PropTypes.number,
//       asker_name: PropTypes.string,
//       question_body: PropTypes.string,
//       question_date: PropTypes.number,
//     }),
// };

// Question.defaultProps = {
//   allQuestions: '',
// };

export default Question;
