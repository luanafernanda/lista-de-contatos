import { Provider } from 'react-redux'
import { store } from './store'
import ContactForm from './components/contactForm/ContactForm'
import ContactList from './components/contactList/ContactList'
import { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
