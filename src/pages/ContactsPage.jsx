import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  ContactsTitle,
  ContainerForm,
  MainTitle,
} from 'ui/Section';

const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerForm>
      {' '}
      <MainTitle>PhoneBook</MainTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Contacts />
    </ContainerForm>
  );
};

export default ContactsPage;
