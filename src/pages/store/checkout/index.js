/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

import Layout from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import Form from '../../../components/store/checkout/form'
import OrderDetails from '../../../components/store/checkout/order-details'

const Checkout = () => {
  return (
    <Layout>
      <Menu />
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.25rem',
          }}
        >
          <Form />
          <OrderDetails />
        </div>
      </Container>
    </Layout>
  )
}

export default Checkout
