import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/serviceApi';
import style from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => {
    return state.contacts.items;
  });

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContactsList = contacts.filter(value =>
    value.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={style.list}>
      {filterContactsList?.map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.phone}</span>
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
