// import { filterContacts } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import style from '../SearchContact/SearchContact.module.css';

export const SearchContact = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={style.title}>Contact</h2>
      <label className={style.label}>
        Search contact
        <input
          onChange={e => dispatch(filterContacts(e.target.value))}
          type="text"
        />
      </label>
    </>
  );
};
