import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Moment from 'moment';

const Answer = ({ answer }) => {
  const {
    answerer_name, body, date, helpfulness, photos, id,
  } = answer;
  const photoAlias = photos;
  const [reported, setReported] = useState(false);
  const [helpfulTrigger, setHelpfulTrigger] = useState(helpfulness);
  const ansObj = { answer_id: id };
  const handleReportAnswer = (e) => {
    e.preventDefault();
    axios.put('/qa/answers/report', ansObj);
    // .then(() => )
    // .catch((error) => console.log(error));
  };
  const handleHelpfulAnswer = (e) => {
    e.preventDefault();
    axios.put('/qa/answers/helpful', ansObj)
      .then(() => setHelpfulTrigger(helpfulTrigger + 1))
      .catch(() => alert('Cannot mark answer as helpful'));
  };
  return (
    <div>
      <span><strong>A:</strong></span>
      {body}
      <br />
      by
      {' '}
      {answerer_name}
      ,
      {' '}
      {Moment(date).format('MMMM Do YYYY')}
      {' '}
      | Helpful?
      <span
        role="button"
        onClick={(e) => handleHelpfulAnswer(e)}
        onKeyPress={handleHelpfulAnswer}
        className="helpful"
        tabIndex={-1}
      >
        <strong>Yes</strong>
      </span>
      {' '}
      (
      {helpfulTrigger}
      ) |
      {' '}
      {
        !reported
          ? (
            <span
              role="button"
              type="submit"
              className="report"
              onKeyDown={handleReportAnswer}
              onClick={(e) => { handleReportAnswer(e); setReported(true); }}
              tabIndex={-1}
            >
              {' '}
              Report
            </span>
          )
          : <span><strong> Reported</strong></span>
      }
      {' '}
      {/* //TODO find a way to resize image to improve efficiency */}
      <div>
        {photoAlias.map((photo) => (<div key={photo.toString()}><img alt="" src={photo} id="answer-images" /></div>))}
      </div>
    </div>
  );
};
Answer.propTypes = {
  answer: PropTypes.shape({
    answerer_name: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    id: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.string),
  }),
  answerer_name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
};

Answer.defaultProps = {
  answer: '',
  answerer_name: '',
  body: '',
  date: '',
  helpfulness: 0,
};

export default Answer;
