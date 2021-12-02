import React from 'react'
import { Router } from '@reach/router'

import Checkout from './checkout'
import Detail from './detail'

const App = () => {
  return (
    <Router basepath="/store">
      <Detail path="/product/:id/:slug" />
      <Checkout path="/checkout" />
    </Router>
  )
}

export default App
