/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Field, Radio, Label } from '@theme-ui/components'

import Layout from '../../components/Layout'
import { StoreContext } from '../../context/Store'

const Checkout = () => {
  const categories = [
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
  ]

  const popular = [
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
  ]

  const orders = [
    {
      title: 'sdfsdf',
      color: 'blue',
      size: 'Large',
      price: 'GHS 50.00',
    },
    {
      title: 'sdfsdf',
      color: 'blue',
      size: 'Large',
      price: 'GHS 50.00',
    },
  ]

  const { cart } = React.useContext(StoreContext)
  console.log('cart', cart)
  const [active, setActive] = React.useState(false)

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
            <form>
              <h4>Contact Information</h4>
              <div>
                <Label htmlFor="email">Email</Label>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label=""
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label=""
                  placeholder="Email"
                  name="email"
                />
              </div>

              <h4>Shipping Infomation</h4>
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '.5rem',
                }}
              >
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    sx={{
                      padding: '.625rem',
                    }}
                    label=""
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    sx={{
                      padding: '.625rem',
                    }}
                    label=""
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label=""
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '.5rem',
                }}
              >
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    sx={{
                      padding: '.625rem',
                    }}
                    label=""
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    sx={{
                      padding: '.625rem',
                    }}
                    label=""
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label=""
                  placeholder="Email"
                  name="email"
                />
              </div>

              <h4>Delivery method</h4>
              <div
                onClick={() => setActive(true)}
                sx={{
                  borderRadius: 'md',
                  outline: active ? 'solid 2px #610B70' : 'solid 1px #E4E7EC',
                  padding: '.75rem',
                  pb: '1rem',
                  '&:hover': {
                    '.radio-check': {
                      opacity: active ? '1' : '.5',
                      display: 'block',
                    },
                    '.radio-input': {
                      display: 'none',
                    },
                  },
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr 1.5rem',
                  gap: '.75rem',
                }}
              >
                <Delivery
                  sx={{
                    width: '2.5rem',
                    mt: '-.5rem',
                  }}
                />
                <div>
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      fontWeight: 'medium',
                      mt: '.1rem',
                    }}
                  >
                    Stardard Delivery
                  </p>
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      color: '#667085',
                    }}
                  >
                    4 - 10 business days
                  </p>
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      mt: '1rem',
                    }}
                  >
                    GH¢10.00
                  </p>
                </div>
                <div>
                  <Radio
                    className="radio-input"
                    sx={{
                      height: '1.25rem',
                      width: '1.25rem',
                      opacity: '.2',
                      display: active ? 'none' : '',
                    }}
                  />
                  <Check
                    sx={{
                      display: active ? 'block' : 'none',
                      ...(active && {
                        opacity: '1',
                      }),
                    }}
                    className="radio-check"
                  />
                </div>
              </div>
            </form>
          </div>

          <div>
            <h4>Order Details</h4>
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
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>{order.product.name}</span>
                    {/* <span>{order.color}</span> */}
                    {/* <span>{order.size}</span> */}
                    <span>{order.product.price}</span>
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
                <span>Subtotal</span>
                <span>GHS 50.00</span>
              </div>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
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
                }}
              >
                <span>Taxes</span>
                <span>GHS 50.00</span>
              </div>

              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                }}
              >
                <span>Total</span>
                <span>GHS 50.00</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

const Check = (props) => {
  return (
    <svg
      {...props}
      width="1.2rem"
      height="1.2rem"
      viewBox="-2 -2 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0V0C15.5228 0 20 4.47715 20 10V10C20 15.5228 15.5228 20 10 20V20C4.47715 20 0 15.5228 0 10V10Z"
        fill="#610B70"
      />
      <path
        d="M14.6666 6.5L8.24998 12.9167L5.33331 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19C5.02944 19 1 14.9706 1 10H-1C-1 16.0751 3.92487 21 10 21V19ZM19 10C19 14.9706 14.9706 19 10 19V21C16.0751 21 21 16.0751 21 10H19ZM10 1C14.9706 1 19 5.02944 19 10H21C21 3.92487 16.0751 -1 10 -1V1ZM10 -1C3.92487 -1 -1 3.92487 -1 10H1C1 5.02944 5.02944 1 10 1V-1Z"
        fill="#610B70"
      />
    </svg>
  )
}

const Delivery = (props) => {
  return (
    <svg
      {...props}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 23C3 11.9543 11.9543 3 23 3V3C34.0457 3 43 11.9543 43 23V23C43 34.0457 34.0457 43 23 43V43C11.9543 43 3 34.0457 3 23V23Z"
        fill="#FCEFFF"
      />
      <path
        d="M14.6667 25.0833L23 29.25L31.3333 25.0833M23 16.75L14.6667 20.9167L23 25.0833L31.3333 20.9167L23 16.75Z"
        stroke="#610B70"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 40C13.6112 40 6 32.3888 6 23H0C0 35.7025 10.2975 46 23 46V40ZM40 23C40 32.3888 32.3888 40 23 40V46C35.7025 46 46 35.7025 46 23H40ZM23 6C32.3888 6 40 13.6112 40 23H46C46 10.2975 35.7025 0 23 0V6ZM23 0C10.2975 0 0 10.2975 0 23H6C6 13.6112 13.6112 6 23 6V0Z"
        fill="#FCEFFF"
      />
    </svg>
  )
}

export default Checkout
