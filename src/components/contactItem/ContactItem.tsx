import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact, editContact } from '../../features/contact/contactSlice'
import {
  ContactContainer,
  ContactDetails,
  EditButton,
  SaveButton,
  DeleteButton,
  ItemContainer,
  ContactInfo,
  ContactName
} from './styles'

type ContactProps = {
  contact: {
    id: number
    name: string
    email: string
    phone: string
  }
}

const ContactItem: React.FC<ContactProps> = ({ contact }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContactName, setEditedContactName] = useState(contact.name)
  const [editedEmail, setEditedEmail] = useState(contact.email)
  const [editedPhone, setEditedPhone] = useState(contact.phone)

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    dispatch(
      editContact({
        id: contact.id,
        name: editedContactName,
        email: editedEmail,
        phone: editedPhone
      })
    )
    setIsEditing(false)
  }

  return (
    <ItemContainer>
      {isEditing ? (
        <ContactContainer>
          <input
            value={editedContactName}
            onChange={(e) => setEditedContactName(e.target.value)}
          />
          <input
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <input
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
          <SaveButton onClick={handleSaveClick}>Salvar</SaveButton>
        </ContactContainer>
      ) : (
        <ContactContainer>
          <ContactDetails>
            <ContactName>{contact.name}</ContactName>
            <ContactInfo>{contact.email}</ContactInfo>
            <ContactInfo>{contact.phone}</ContactInfo>
          </ContactDetails>
          <div>
            <EditButton onClick={handleEditClick}>Editar</EditButton>
            <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
          </div>
        </ContactContainer>
      )}
    </ItemContainer>
  )
}

export default ContactItem
