import React from 'react';
import style from './Statistic.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <div className={style.stat}>
      <h2>Your mood's statistic</h2>
      <span className={style.text}>Good: {good}</span>
      <span className={style.text}>Neutral: {neutral}</span>
      <span className={style.text}>Bad: {bad}</span>
      <span className={style.text}>Total: {total}</span>
      <span className={style.text}>Positive mood: {positive}%</span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
