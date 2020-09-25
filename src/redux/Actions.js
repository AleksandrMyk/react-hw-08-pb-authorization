import { createAction } from '@reduxjs/toolkit';

const addContRequest = createAction('contact/addRequest');
const addContSuccess = createAction('contact/addSuccess');
const addContError = createAction('contact/addError');

const getContRequest = createAction('contact/getRequest');
const getContSuccess = createAction('contact/getSuccess');
const getContError = createAction('contact/getError');

const removeContRequest = createAction('contact/removeRequest');
const removeContSuccess = createAction('contact/removeSuccess');
const removeContError = createAction('contact/removeError');

const changeFilter = createAction('contact/filter');

export default {
  changeFilter,
  addContRequest,
  addContSuccess,
  addContError,
  getContSuccess,
  getContRequest,
  getContError,
  removeContRequest,
  removeContSuccess,
  removeContError,
};
