import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from './Actions';

const onAddContact = (state, action) => {
  return [...state, action.payload];
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

export default combineReducers({
  items,
  filter,
});
