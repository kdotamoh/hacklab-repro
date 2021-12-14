/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import { PaystackButton } from 'react-paystack'
import { StoreContext } from '../../../context/Store'

import { StoreLayout } from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import ReviewDetails from '../../../components/store/checkout/review-details'
import OrderDetails from '../../../components/store/checkout/order-details'
import { updateOrderStatus } from '../../../api/orders/update-order'
import { navigate } from 'gatsby-link'

const ReviewAndPay = () => {
  const { checkout } = React.useContext(StoreContext)

  const onSuccess = async (order_id) => {
    const payload = { status: 'processing', set_paid: 'true' }
    await updateOrderStatus({
      order_id: order_id,
      payload,
    })
    navigate('/store/checkout/post-payment')
  }

  const onClose = () => {
    console.log('closed')
  }

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
                reference={`${checkout?.id}-${new Date().getTime()}`}
                email={checkout?.billing?.email}
                amount={checkout?.total * 100}
                currency="GHS"
                publicKey={process.env.GATSBY_PAYSTACK_PUBLIC_KEY}
              />
            </div>
          </div>

          <div>
            <OrderDetails reviewing={true} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ReviewAndPay
