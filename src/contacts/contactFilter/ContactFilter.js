import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import style from './ContactFilter.module.css';
import Actions from '../../redux/Actions';
import Selectors from '../../redux/Selectors';

const Filter = ({ value, onFilter }) => {
  return (
    <form className={style.filterForm}>
      <label className={style.filterLabel}>
        Find contacts by name
        <input
          className={style.filterInput}
          type="text"
          autoComplete="off"
          value={value}
          onChange={e => onFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

const mapStateToProps = state => ({
  value: Selectors.getFilterValue(state),
});
const mapDispatchToProps = {
  onFilter: Actions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
