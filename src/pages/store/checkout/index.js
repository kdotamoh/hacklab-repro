/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

import Layout from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import Form from '../../../components/store/checkout/form'
import OrderDetails from '../../../components/store/checkout/order-details'
import { StoreContext } from '../../../context/Store'

const Checkout = () => {
  const { cart } = React.useContext(StoreContext)

  return (
    <Layout>
      <Menu />
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        {cart.length > 0 ? (
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
              gap: '3.25rem',
            }}
          >
            <Form />
            <OrderDetails />
          </div>
        ) : (
          <>
            <h4
              sx={{
                mt: '2.5rem',
                mb: '1rem',
              }}
            >
              Your cart is empty
            </h4>
            <p>Please add some items to your cart.</p>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Checkout
