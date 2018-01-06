import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Contacts from './contacts'

const ContactsWrapper = () => {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  )
}

export default ContactsWrapper
