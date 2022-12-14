import { Form } from './Form/Form';
import { SearchContact } from './SearchContact/SearchContact';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <Form />
      <SearchContact />
      <ContactList />
    </div>
  );
};
