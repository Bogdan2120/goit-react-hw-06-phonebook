import { useSelector, useDispatch } from 'react-redux';
import { ImMobile } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

import styles from './contactList.module.scss';

const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactsList}>
      {filterContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={styles.contactList}>
            <span className={styles.contact}>
              <IconContext.Provider value={{ style: { color: '#ff6f00' } }}>
                <ImMobile />
              </IconContext.Provider>
              {name}: <span className={styles.number}>{number}</span>
            </span>
            <button
              type="button"
              className={styles.button}
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
