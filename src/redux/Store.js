import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const rootReducer = combineReducers({
  contacts: Reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
