import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import { addContacts, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

import {
  getAllContacts,
  getFilteredContacts,
  getFilter,
} from 'redux/selectors';
import styles from './phoneBook.module.scss';

const PhoneBook = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLocaleLowerCase();

    const result = contacts.find(({ name }) => {
      return name.toLocaleLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const addContact = (name, number) => {
    if (isDublicate(name)) {
      Notiflix.Notify.failure(`${name} is olready in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContactsFilter = Boolean(filterContacts.length);

  return (
    <section className={styles.sectionBook}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter handleFilter={handleFilter} filter={filter} />
      {isContactsFilter && (
        <ContactList contacts={filterContacts} remuveContact={removeContact} />
      )}
      {!isContactsFilter && <p>There is no contacts.</p>}
    </section>
  );
};

export default PhoneBook;
