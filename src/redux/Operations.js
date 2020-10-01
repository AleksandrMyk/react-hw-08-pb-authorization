import axios from 'axios';
import Actions from './Actions';

// axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  dispatch(Actions.addContRequest());

  axios
    .post('/contacts', { name, number })
    .then(response => dispatch(Actions.addContSuccess(response.data)))
    .catch(error => dispatch(Actions.addContError(error)));
};

const getContacts = () => dispatch => {
  dispatch(Actions.getContRequest());

  axios
    .get('/contacts')
    .then(response => dispatch(Actions.getContSuccess(response.data)))
    .catch(error => dispatch(Actions.getContError(error)));
};

const removeContacts = id => dispatch => {
  dispatch(Actions.removeContRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(Actions.removeContSuccess(id)))
    .catch(error => dispatch(Actions.removeContError(error)));
};

export default {
  addContact,
  getContacts,
  removeContacts,
};
