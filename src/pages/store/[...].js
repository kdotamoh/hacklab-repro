import React from 'react'
import { Router } from '@reach/router'

import Checkout from './checkout'
import Detail from './detail'
import ReviewAndPay from './checkout/review-and-pay'
import PostPayment from './checkout/post-payment'

const App = () => {
  return (
    <Router basepath="/store">
      <Detail path="/product/:id/:slug" />
      <Checkout path="/checkout">
        <ReviewAndPay path="/review-and-pay" />
        <PostPayment path="/post-payment" />
      </Checkout>
    </Router>
  )
}

export default App
