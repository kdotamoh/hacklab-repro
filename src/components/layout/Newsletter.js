/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Field, Button, Container } from 'theme-ui'

/**
 * @param {Object} props
 */
const Newsletter = (props) => {
  return (
    <Container
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        mb: '10rem',
        pt: '6rem',
        width: ['92%', '92%', '82%'],
      }}
    >
      <h3
        sx={{
          pb: '1.25rem',
        }}
      >
        Sign up for our newsletter
      </h3>
      <p>Be the first to know about releases and industry news and insights.</p>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          width: ['100%', '100%', '30rem'],
          margin: '0 auto',
          mt: '2.5rem',
        }}
      >
        <div
          sx={{
            flex: 1,
            width: ['100%', '100%', 'max-content'],
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
        <Button
          sx={{
            width: ['100%', '100%', 'max-content'],
          }}
        >
          Subscribe
        </Button>
      </div>
    </Container>
  )
}

export default Newsletter
