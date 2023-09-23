import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import { addContact } from '../../features/contact/contactSlice'
import { Container, Form, Button, InputGroup, Title } from './styles'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    const id = Date.now()
    dispatch(addContact({ id, name, email, phone }))

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <>
      <Title>Lista de Contatos</Title>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <input
              id="nomeCompleto"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputMask
              mask="(99) 99999-9999"
              id="telefone"
              value={phone}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <Button type="submit">Adicionar</Button>
        </Form>
      </Container>
    </>
  )
}

export default ContactForm
