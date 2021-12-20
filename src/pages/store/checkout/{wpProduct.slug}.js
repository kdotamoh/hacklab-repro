/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import { graphql } from 'gatsby'

import { StoreLayout } from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import Form from '../../../components/store/checkout/form'
import OrderDetails from '../../../components/store/checkout/order-details'

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = React.useState({
    methodId: '',
    methodTitle: '',
    description: '',
    total: '0.00',
  })

  return (
    <StoreLayout>
      <Menu />
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
            gap: '3.25rem',
          }}
        >
          <Form
            {...{ deliveryMethod, setDeliveryMethod }}
            isSingleProduct={true}
          />
          <OrderDetails {...{ deliveryMethod }} isSingleProduct={true} />
        </div>
      </Container>
    </StoreLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    product: wpProduct(id: { eq: $id }) {
      ...ProductInformation
    }
  }
`

export default Checkout
