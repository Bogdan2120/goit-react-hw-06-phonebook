export const getAllContacts = store => store.contacts;
export const getFilter = store => store.filter;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContscts = contacts.filter(({ name }) => {
    return name.toLocaleLowerCase().includes(normalizedFilter);
  });

  return filteredContscts;
};
