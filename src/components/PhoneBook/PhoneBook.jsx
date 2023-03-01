import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { getFilteredContacts } from 'redux/selectors';
import styles from './phoneBook.module.scss';

const PhoneBook = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const isContactsFilter = Boolean(filterContacts.length);

  return (
    <section className={styles.sectionBook}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      {isContactsFilter && <ContactList />}
      {!isContactsFilter && <p>There is no contacts.</p>}
    </section>
  );
};

export default PhoneBook;
