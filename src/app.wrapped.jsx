// - For webpack
import 'isomorphic-fetch'
import 'babel-polyfill'
// - END / For webpack
import React from 'react'
import { Provider } from 'react-redux'
import './connectAll' // before stores are instanciated
import store from './redux/store'
import App from './app'

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Wrapper
