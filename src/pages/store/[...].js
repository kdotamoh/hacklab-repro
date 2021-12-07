import React from 'react'
import { Router } from '@reach/router'

import Checkout from './checkout'
import Detail from './detail'
import ReviewAndPay from './checkout/review-and-pay'

const App = () => {
  return (
    <Router basepath="/store">
      <Detail path="/product/:id/:slug" />
      <Checkout path="/checkout">
        <ReviewAndPay path="/review-and-pay" />
      </Checkout>
    </Router>
  )
}

export default App
