/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Field, Button, Container } from 'theme-ui'

/**
 * @param {Object} props
 */
const Newsletter = ({ buttonText, placeholder, text, ...props }) => {
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
      <div
        sx={{
          h1: {
            pb: '1.25rem',
          },
          h2: {
            pb: '1.25rem',
          },
          h3: {
            pb: '1.25rem',
          },
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
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
            placeholder={placeholder}
            name="newsletter"
          />
        </div>
        <Button
          sx={{
            width: ['100%', '100%', 'max-content'],
          }}
        >
          {buttonText}
        </Button>
      </div>
    </Container>
  )
}

export default Newsletter
