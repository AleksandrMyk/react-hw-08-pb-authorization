import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

function Buttons({ onGood, onNeutral, onBad }) {
  return (
    <div>
      <button className={style.btng} onClick={onGood} type="button">
        Good
      </button>
      <button className={style.btnn} onClick={onNeutral} type="button">
        Neutral
      </button>
      <button className={style.btnb} onClick={onBad} type="button">
        bad
      </button>
    </div>
  );
}

Buttons.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default Buttons;
