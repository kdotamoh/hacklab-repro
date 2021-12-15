/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Field, Radio, Button } from '@theme-ui/components'
import { Formik } from 'formik'
import * as yup from 'yup'
import { graphql, useStaticQuery, navigate } from 'gatsby'

import { StoreContext } from '../../../context/Store'
import { createOrder } from '../../../api/orders/create-order'

/**
 * @param {Object} props
 * @param {boolean} [props.isSingleProduct]
 * @param {Object} [props.deliveryMethod]
 */
const Form = ({ isSingleProduct, deliveryMethod, setDeliveryMethod }) => {
  const { cart, singleItemPurchase, proceedToCheckout } =
    React.useContext(StoreContext)

  const initialValues = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    deliveryMethod: deliveryMethod,
  }

  const handleOrder = async (values) => {
    let line_items = []
    if (isSingleProduct) {
      line_items = [
        {
          product_id: singleItemPurchase.product_id,
          quantity: singleItemPurchase.quantity,
          meta_data: singleItemPurchase.meta_data,
        },
      ]
    } else {
      line_items = cart.map((lineItem) => {
        const item = {
          product_id: lineItem.product_id,
          quantity: lineItem.quantity,
          meta_data: lineItem.meta_data,
        }
        return item
      })
    }

    const orderData = {
      payment_method: 'paystack',
      payment_method_title: 'Paystack',
      set_paid: false,
      currency: 'GHS',
      billing: {
        first_name: values.firstName,
        last_name: values.lastName,
        address_1: values.address,
        address_2: '',
        city: values.city,
        state: '',
        postcode: '',
        country: values.country,
        email: values.email,
        phone: values.phoneNumber,
      },
      shipping: {
        first_name: values.firstName,
        last_name: values.lastName,
        address_1: values.address,
        address_2: '',
        city: values.city,
        state: '',
        postcode: '',
        country: values.country,
      },
      line_items,
      shipping_lines: [
        {
          method_id: values.deliveryMethod.methodId,
          method_title: values.deliveryMethod.methodTitle,
          total: values.deliveryMethod.total,
        },
      ],
    }

    const order = await createOrder(orderData)
    return order
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape({
        email: yup.string().email().required('Email is required'),
        phoneNumber: yup.string().required('Phone number is required'),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        address: yup.string().required('Address is required'),
        city: yup.string().required('City is required'),
        country: yup.string().required('Country is required'),
        deliveryMethod: yup.object().shape({
          methodId: yup.string().required('Delivery method is required'),
          methodTitle: yup.string(),
          total: yup.string(),
        }),
      })}
      onSubmit={async (values) => {
        //@ts-ignore
        let order = await handleOrder(values)
        proceedToCheckout(order)
        navigate('/store/checkout/review-and-pay')
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
      }) => (
        <form>
          <div>
            <h4
              sx={{
                mt: '2.5rem',
                mb: '1rem',
              }}
            >
              Contact Information
            </h4>
            <div
              sx={{
                mb: '1rem',
              }}
            >
              <Field
                sx={{
                  padding: '.625rem',
                }}
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
              />
              <p
                sx={{
                  pt: '.25rem',
                  color: 'red',
                  fontSize: 'caption',
                }}
              >
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div
              sx={{
                mb: '1rem',
              }}
            >
              <Field
                sx={{
                  padding: '.625rem',
                }}
                label="Phone number"
                placeholder="0203948576"
                name="phoneNumber"
                type="text"
                onChange={handleChange}
                value={values.phoneNumber}
              />
              <p
                sx={{
                  pt: '.25rem',
                  color: 'red',
                  fontSize: 'caption',
                }}
              >
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </p>
            </div>

            <h4
              sx={{
                mt: '2.5rem',
                mb: '1rem',
              }}
            >
              Shipping Information
            </h4>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '.5rem',
              }}
            >
              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label="First name"
                  placeholder="First name"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label="Last name"
                  placeholder="Last name"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={values.lastName}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
            </div>
            <div
              sx={{
                mb: '1rem',
              }}
            >
              <Field
                sx={{
                  padding: '.625rem',
                }}
                label="Address"
                placeholder="eg: Accra Mall Ghana"
                name="address"
                type="text"
                onChange={handleChange}
                value={values.address}
              />
              <p
                sx={{
                  pt: '.25rem',
                  color: 'red',
                  fontSize: 'caption',
                }}
              >
                {errors.address && touched.address && errors.address}
              </p>
            </div>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '.5rem',
                mb: '1rem',
              }}
            >
              <div>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label="City"
                  placeholder="City"
                  name="city"
                  type="text"
                  onChange={handleChange}
                  value={values.city}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.city && touched.city && errors.city}
                </p>
              </div>
              <div>
                <Field
                  sx={{
                    padding: '.625rem',
                  }}
                  label="Country"
                  placeholder="Country"
                  name="country"
                  type="text"
                  onChange={handleChange}
                  value={values.country}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.country && touched.country && errors.country}
                </p>
              </div>
            </div>

            <h4
              sx={{
                mt: '2.5rem',
                mb: '1rem',
              }}
            >
              Delivery method
            </h4>
            <DeliveryOptions
              {...{ setFieldValue, setFieldTouched, setDeliveryMethod }}
            />
            <p
              sx={{
                pt: '.25rem',
                color: 'red',
                fontSize: 'caption',
              }}
            >
              {errors.deliveryMethod?.methodId &&
                touched.deliveryMethod?.methodId &&
                errors.deliveryMethod?.methodId}
            </p>
          </div>

          <Button
            type="submit"
            sx={{
              mt: '1rem',
              width: '100%',
            }}
            onClick={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Proceed to payment'}
          </Button>
        </form>
      )}
    </Formik>
  )
}

const DeliveryOptions = ({
  setFieldValue,
  setFieldTouched,
  setDeliveryMethod,
}) => {
  const {
    deliveryMethods: {
      admin: { woocommerceDeliveryMethods },
    },
  } = useStaticQuery(graphql`
    {
      deliveryMethods: wpPage(slug: { eq: "admin-page" }) {
        admin {
          woocommerceDeliveryMethods {
            description
            icon {
              sourceUrl
            }
            methodId
            methodTitle
            total
          }
        }
      }
    }
  `)

  const [active, setActive] = React.useState(null)

  return (
    <>
      {woocommerceDeliveryMethods.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            setActive(index)
            setFieldValue('deliveryMethod', option)
            setFieldTouched('deliveryMethod')
            setDeliveryMethod(option)
          }}
          sx={{
            borderRadius: 'md',
            mt: '1rem',
            outline:
              active === index ? 'solid 2px #610B70' : 'solid 1px #E4E7EC',
            padding: '.75rem',
            pb: '1rem',
            '&:hover': {
              '.radio-check': {
                opacity: active === index ? '1' : '.5',
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
              {option.methodTitle}
            </p>
            <p
              sx={{
                fontSize: 'paragraph2',
                color: '#667085',
              }}
            >
              {option.description}
            </p>
            <p
              sx={{
                fontSize: 'paragraph2',
                mt: '1rem',
              }}
            >
              GH¢{option.total}
            </p>
          </div>
          <div>
            <Radio
              className="radio-input"
              sx={{
                height: '1.25rem',
                width: '1.25rem',
                opacity: '.2',
                display: active === index ? 'none' : '',
              }}
            />
            <Check
              sx={{
                display: active === index ? 'block' : 'none',
                ...(active === index && {
                  opacity: '1',
                }),
              }}
              className="radio-check"
            />
          </div>
        </div>
      ))}
    </>
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

export default Form
