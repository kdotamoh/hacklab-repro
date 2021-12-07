/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Divider } from '@theme-ui/components'

import { StoreContext } from '../../../context/Store'

const OrderDetails = () => {
  const { cart, removeLineItem, updateQuantity, reduceQuantity } =
    React.useContext(StoreContext)

  return (
    <div>
      <h4
        sx={{
          mt: '2.5rem',
          mb: '1rem',
        }}
      >
        Order Details
      </h4>
      <div
        sx={{
          bg: '#F9FAFB',
          padding: '1.5rem',
          pt: '0rem',
          borderRadius: 'sm',
        }}
      >
        {cart?.map((order, index) => (
          <div
            key={index}
            sx={{
              display: 'flex',
              gap: '.75rem',
              borderBottom: '1px solid #E5E7EB',
              py: '1.5rem',
              position: 'relative',
            }}
          >
            <img
              sx={{
                height: '7.5rem',
                width: '6.25rem',
                objectFit: 'cover',
                borderRadius: 'sm',
              }}
              src="https://media.cntraveler.com/photos/60db7a42303d7ca9bcab2bfc/master/w_2100,h_1500,c_limit/Best%20Travel%20Backpacks%20for%20Every%20Type%20of%20Vacation-2021_Dagne%20Dover%20large%20dakota%20backpack.jpg"
            />
            <Trash onClick={() => removeLineItem(order.product.id)} />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              }}
            >
              <span
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {order.product.name}
              </span>
              <span
                sx={{
                  pt: '.5rem',
                }}
              >
                color
              </span>
              <span
                sx={{
                  pt: '.5rem',
                }}
              >
                size
              </span>
              <div
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  sx={{
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}
                >
                  GHS {order.product.price}
                </span>
                <Quantity
                  decrement={() =>
                    reduceQuantity({
                      product_id: order.product.id,
                      quantity: order.quantity,
                    })
                  }
                  increment={() =>
                    updateQuantity({
                      product_id: order.product.id,
                      quantity: order.quantity,
                    })
                  }
                  order={order}
                />
              </div>
            </div>
          </div>
        ))}
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
          }}
        >
          <div
            sx={{
              mt: '1.5rem',
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span>Subtotal</span>
            <span>GHS 50.00</span>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            my: '1.5rem',
          }}
        >
          <span>Shipping</span>
          <span>GHS 50.00</span>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            my: '1.5rem',
          }}
        >
          <span>Taxes</span>
          <span>GHS 50.00</span>
        </div>
        <Divider />
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            fontSize: 'h4',
            mt: '1.5rem',
          }}
        >
          <span>Total</span>
          <span>GHS 50.00</span>
        </div>
      </div>
    </div>
  )
}

const Quantity = ({ decrement, increment, order }) => {
  return (
    <div
      sx={{
        padding: '.5rem',
        border: '1px solid #E5E7EB',
        borderRadius: 'sm',
        alignItems: 'center',
        display: 'flex',
        width: 'max-content',
      }}
    >
      <Minus
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => decrement()}
      />
      <span
        sx={{
          mx: '.5rem',
          fontWeight: 'bold',
          width: '2rem',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        {order.quantity}
      </span>
      <Plus
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => increment()}
      />
    </div>
  )
}

const Trash = (props) => {
  return (
    <svg
      {...props}
      sx={{ cursor: 'pointer', position: 'absolute', right: '0' }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 3.5L4.125 13.5C4.15469 14.0778 4.575 14.5 5.125 14.5H10.875C11.4272 14.5 11.8397 14.0778 11.875 13.5L12.5 3.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 3.5H13.5"
        stroke="#EF4444"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6 3.5V2.25C5.99971 2.15143 6.01892 2.05377 6.05651 1.96265C6.09409 1.87152 6.14933 1.78873 6.21903 1.71903C6.28873 1.64933 6.37153 1.59409 6.46265 1.55651C6.55378 1.51892 6.65143 1.49971 6.75 1.5H9.25001C9.34858 1.49971 9.44624 1.51892 9.53736 1.55651C9.62849 1.59409 9.71128 1.64933 9.78099 1.71903C9.85069 1.78873 9.90592 1.87152 9.94351 1.96265C9.9811 2.05377 10.0003 2.15143 10 2.25V3.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.5V12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 5.5L6 12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 5.5L10 12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Minus = (props) => {
  return (
    <svg
      {...props}
      width="12"
      height="3"
      viewBox="0 0 12 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6666 1.5H1.66663"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Plus = (props) => {
  return (
    <svg
      {...props}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 4V13"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1875 8.5H3.8125"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default OrderDetails
