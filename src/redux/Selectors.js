import { createSelector } from '@reduxjs/toolkit';

const getFilterValue = state => state.contacts.filter;
const getItems = state => state.contacts.items;
const getLoading = state => state.contacts.spinner;

// const getContId = (state, ownProps) => {
//   const items = getItems(state, ownProps);
//   return items.find(item => item.id === ownProps.id);
// };

const getContId = createSelector(
  [(state, contactId) => contactId, getItems],
  (contactId, items) => items.find(item => item.id === contactId),
);

const getContacts = createSelector([getItems, getFilterValue], (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
})

export default {
  getFilterValue,
  getItems,
  getLoading,
  getContId,
  getContacts,
};
