import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

interface ContactState {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: []
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      )
      if (index !== -1) {
        state.contacts.splice(index, 1)
      }
    }
  }
})

export const { addContact, editContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer
