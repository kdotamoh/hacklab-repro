/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Field, Button } from 'theme-ui'

/**
 * @param {Object} props
 */
const Newsletter = (props) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        mb: '10rem',
        pt: '6rem',
      }}
    >
      <h2
        sx={{
          pb: '1.25rem',
        }}
      >
        Sign up for our newsletter
      </h2>
      <p>Be the first to know about releases and industry news and insights.</p>
      <div
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30rem',
          margin: '0 auto',
          mt: '2.5rem',
        }}
      >
        <div
          sx={{
            flex: 1,
          }}
        >
          <Field
            sx={{
              padding: '.625rem',
            }}
            label=""
            placeholder="Enter your email"
            name="newsletter"
          />
        </div>
        <Button>Subscribe</Button>
      </div>
    </div>
  )
}

export default Newsletter
