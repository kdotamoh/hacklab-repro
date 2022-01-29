/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Spinner } from '@theme-ui/components'
import { PaystackButton } from 'react-paystack'
import { StoreContext } from '../../../context/Store'
import { isEmpty } from 'lodash'

import { StoreLayout } from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import ReviewDetails from '../../../components/store/checkout/review-details'
import { updateOrderStatus } from '../../../store-api/orders/update-order'

const ReviewAndPay = () => {
  const { checkout, completeOrder } = React.useContext(StoreContext)
  const [status, setStatus] = React.useState('initial')

  const onSuccess = async (order_id) => {
    const payload = { status: 'processing', set_paid: 'true' }
    setStatus('updating')
    try {
      await updateOrderStatus({
        order_id: order_id,
        payload,
      })
      setStatus('complete')
      completeOrder()
    } catch (error) {
      console.log('Error updating order: ', error)
      setStatus('error')
    }
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
            gridTemplateColumns: ['1fr', '1fr', '60% 1fr'],
            gap: '3.25rem',
          }}
        >
          <Status {...{ status, checkout, onSuccess, onClose }} />
        </div>
      </Container>
    </StoreLayout>
  )
}

const Status = ({ status, checkout, onSuccess, onClose }) => {
  if (status === 'initial') {
    return (
      <>
        {isEmpty(checkout) ? (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h4
              sx={{
                mt: '2.5rem',
                mb: '1rem',
              }}
            >
              Your checkout is empty
            </h4>
            <p>Please create an order</p>
          </div>
        ) : (
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
                publicKey={process.env.GATSBY_PAYSTACK_PUBLIC_KEY}
              />
            </div>
          </div>
        )}
      </>
    )
  }

  if (status === 'updating') {
    return (
      <>
        <div
          sx={{
            mt: '2.5rem',
            mb: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <Spinner strokeWidth={4} size={15} /> <p>Updating your order...</p>
        </div>
      </>
    )
  }

  if (status === 'complete') {
    return (
      <>
        <p
          sx={{
            mt: '2.5rem',
            mb: '2.5rem',
          }}
        >
          Order complete. Please check your email for your payment receipt.
          Thank you for your purchase!
        </p>
      </>
    )
  }

  if (status === 'error') {
    return (
      <>
        <p
          sx={{
            mt: '2.5rem',
            mb: '2.5rem',
          }}
        >
          An error occured while updating your order. If you have been charged
          for this order please send an email to{' '}
          <a href="mailto:info@hacklabfoundation.org">
            info@hacklabfoundation.org
          </a>{' '}
          with the transaction receipt you received from Paystack and we will
          get back to you as soon as possible. Thank you.
        </p>
      </>
    )
  }

  return null
}

export default ReviewAndPay
