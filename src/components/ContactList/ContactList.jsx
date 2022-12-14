// import { deleteContact } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import style from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContactsList = contacts.filter(value =>
    value.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ul className={style.list}>
        {filterContactsList.map(contact => {
          return (
            <li className={style.item} key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
