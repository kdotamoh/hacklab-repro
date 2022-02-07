/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Field, Button, Container, Spinner } from 'theme-ui'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

/**
 * @param {Object} props
 */
const Newsletter = ({
  buttonText,
  placeholder,
  text,
  submissionSuccessText,
  mailchimpUrl,
  ...props
}) => {
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
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          // <div>
          //   <Form onSubmitted={(formData) => subscribe(formData)} />
          //   {status === 'sending' && (
          //     <div style={{ color: 'blue' }}>sending...</div>
          //   )}
          //   {status === 'error' && (
          //     <div
          //       style={{ color: 'red' }}
          //       dangerouslySetInnerHTML={{ __html: message }}
          //     />
          //   )}
          //   {status === 'success' && (
          //     <div style={{ color: 'green' }}>Subscribed !</div>
          //   )}
          // </div>
          <Form
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            // props
            buttonText={buttonText}
            placeholder={placeholder}
            text={text}
            submissionSuccessText={submissionSuccessText}
          />
        )}
      />
    </Container>
  )
}

const Form = ({
  status,
  message,
  onValidated,
  buttonText,
  placeholder,
  text,
  submissionSuccessText,
}) => {
  const [email, setEmail] = React.useState('')

  const submit = (e) => {
    e.preventDefault()
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      })
  }

  return (
    <form onSubmit={(e) => submit(e)}>
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
        dangerouslySetInnerHTML={{
          __html: status === 'success' ? submissionSuccessText : text,
        }}
      ></div>
      {status !== 'success' && (
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
              required
              label=""
              placeholder={placeholder}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <Button
            sx={{
              width: ['100%', '100%', 'max-content'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '7rem',
              transition: 'ease-in-out all 0.25s',
            }}
          >
            {status === 'sending' ? (
              <Spinner strokeWidth={4} size={15} color="white" />
            ) : (
              buttonText
            )}
          </Button>
        </div>
      )}

      {status === 'error' && (
        <p
          sx={{
            pt: '.25rem',
            color: 'red',
            fontSize: 'caption',
          }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  )
}

export default Newsletter
