// import { addContact } from '../../redux/actions';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import style from '../Form/Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    // dispatch(addContact(form));
  };

  return (
    <>
      <h2 className={style.title}>Phonebook</h2>
      <form className={style.form} onSubmit={onHandleSubmit}>
        <label className={style.label}>
          Name
          <input type="text" name="name" />
        </label>
        <label className={style.label}>
          Number
          <input type="text" name="number" />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
