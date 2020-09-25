import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from './Actions';

const onAddContact = (state, action) => {
  if (state && state.find(item => action.payload.name === item.name)) {
    alert('CONTACT IS ALREADY ON BOARD!!!');
  } else if (action.payload.name === '' || action.payload.number === '') {
    alert(`BE CALM AND FIELD ALL FIELDS!!!`);
    return state;
  } else {
    return [...state, action.payload];
  }
};
const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [Actions.getContSuccess]: (state, action) => action.payload,
  [Actions.addContSuccess]: onAddContact,
  [Actions.removeContSuccess]: onRemoveContact,
});
const filter = createReducer('', {
  [Actions.changeFilter]: (state, action) => action.payload,
});

const spinner = createReducer(false, {
  [Actions.addContRequest]: () => true,
  [Actions.addContSuccess]: () => false,
  [Actions.addContError]: () => false,
  [Actions.getContRequest]: () => true,
  [Actions.getContSuccess]: () => false,
  [Actions.removeContRequest]: () => true,
  [Actions.removeContSuccess]: () => false,
  [Actions.removeContError]: () => false,
});

export default combineReducers({
  items,
  filter,
  spinner,
});
