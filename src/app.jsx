import React from 'react'
import Header from './components/header'
import Cities from './screens/cities'
import Contacts from './screens/contacts'

const App = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <Header />
      <Cities />
      <Contacts />
    </div>
  )
}

export default App
