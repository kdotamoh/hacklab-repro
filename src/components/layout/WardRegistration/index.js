/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Formik } from 'formik'
import { Button, Field, Label, Textarea } from '@theme-ui/components'
import * as yup from 'yup'

const WardRegistration = ({ text, image }) => {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  }
  return (
    <div sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
      <div sx={{ p: '6rem' }}>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          sx={{
            strong: { color: '#667085' },
            h4: { mb: '1.5rem' },
            h3: { mb: '1.5rem' },
            h2: { mb: '1.5rem' },
            h1: { mb: '1.5rem' },
            a: { color: 'primary', textDecoration: 'none' },
          }}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().email().required('Email is required'),
            phoneNumber: yup.string().required('Phone number is required'),
          })}
          onSubmit={() => {}}
        >
          {({ values, handleChange, errors, touched }) => (
            <form
              sx={{
                pt: '3rem',
              }}
            >
              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Field
                  label="Name"
                  placeholder="Your name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.name && touched.name && errors.name}
                </p>
              </div>

              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Field
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

              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Label>How can we help?</Label>
                <Textarea
                  placeholder="Tell us the area you want help with"
                  name="message"
                  rows={8}
                  onChange={handleChange}
                  value={values.message}
                />
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.message && touched.message && errors.message}
                </p>
              </div>

              <div
                sx={{
                  mb: '1rem',
                }}
              >
                <Label
                  sx={{
                    mb: '1rem',
                  }}
                >
                  Services?
                </Label>
                <div
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '12rem 12rem',
                    rowGap: '1rem',
                  }}
                >
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                  <div>
                    <input
                      sx={{ opacity: '.5', mr: '.25rem' }}
                      type="checkbox"
                      // checked={checked}
                      // onChange={() => {
                      // setChecked(!checked)
                      // }}
                    />{' '}
                    <span>Rutrum urna.</span>
                  </div>
                </div>
                <p
                  sx={{
                    pt: '.25rem',
                    color: 'red',
                    fontSize: 'caption',
                  }}
                >
                  {errors.message && touched.message && errors.message}
                </p>
              </div>

              <Button
                type="submit"
                sx={{
                  mt: '1rem',
                  width: '100%',
                }}
                // onClick={(e) => {
                //   e.preventDefault()
                //   handleSubmit()
                // }}
              >
                Get started
                {/* {isSubmitting ? (
                  <Spinner variant="forms.spinner" />
                ) : (
                  'Proceed to payment'
                )} */}
              </Button>
            </form>
          )}
        </Formik>
      </div>
      <div>
        <img
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={image.sourceUrl}
        />
      </div>
    </div>
  )
}

export default WardRegistration
