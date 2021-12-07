/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import { PaystackButton } from 'react-paystack'
import { StoreContext } from '../../../context/Store'

import Layout from '../../../components/Layout'
import ReviewDetails from '../../../components/store/checkout/review-details'
import OrderDetails from '../../../components/store/checkout/order-details'
import { updateOrderStatus } from '../../../api/orders/update-order'

const initialValues = {
  email: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: '',
  deliveryOption: '',
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'setForm':
      return (state = action.payload)
  }
}

const ReviewAndPay = () => {
  const [state, dispatch] = React.useReducer(formReducer, initialValues)
  const { checkout } = React.useContext(StoreContext)

  const onSuccess = async (order_id) => {
    const payload = { status: 'processing', set_paid: 'true' }
    updateOrderStatus({
      order_id: order_id,
      payload,
    })
  }

  const onClose = () => {
    console.log('closed')
  }

  return (
    <Layout>
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
          <div>
            <ReviewDetails />

            <div
              sx={{
                display: 'flex',
              }}
            >
              <PaystackButton
                disabled={true}
                sx={{
                  bg: 'primary',
                  border: 'none',
                  borderRadius: 'sm',
                  fontWeight: 'medium',
                  padding: '.625rem 1.125rem',
                  cursor: 'pointer',
                  color: 'white',
                  mt: '1rem',
                }}
                text="Pay now"
                onSuccess={() => onSuccess(checkout?.id)}
                onClose={() => onClose()}
                reference={checkout?.id}
                email={checkout?.billing?.email}
                amount={checkout?.total * 100}
                currency="GHS"
                publicKey={process.env.PAYSTACK_PUBLIC_KEY}
              />
            </div>
          </div>

          <div>
            <OrderDetails />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ReviewAndPay
