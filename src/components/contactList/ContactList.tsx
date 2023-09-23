import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ContactItem from './../contactItem/ContactItem'
import { ListContainer } from './styles'

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts)

  return (
    <ListContainer>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <p>Lista de contatos vazia</p>
      )}
    </ListContainer>
  )
}

export default ContactList
