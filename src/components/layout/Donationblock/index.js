/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from '@theme-ui/components'

const Donationblock = ({
  disclaimerText,
  paystackLink,
  linkText,
  text,
  ...props
}) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <Container
      sx={{
        width: ['92%', '92%', '82%'],
        py: '6rem',
      }}
      {...props}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '30rem',
          width: '100%',
          margin: '0 auto',
          pt: '4rem',
        }}
      >
        <p
          sx={{
            display: 'flex',
            mb: '2rem',
            alignItems: 'center',
          }}
        >
          <input
            sx={{}}
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
          ></input>
          <span
            sx={{
              ml: '.75rem',
            }}
          >
            {disclaimerText}
          </span>
        </p>
        <a
          sx={{
            width: '100%',
          }}
          href={paystackLink}
        >
          <Button
            sx={{
              width: '100%',
            }}
            disabled={!checked}
          >
            {linkText}
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default Donationblock
