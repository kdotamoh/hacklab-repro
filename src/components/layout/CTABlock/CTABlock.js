/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'

// @ts-ignore
import check from '../../../images/svg/check.svg'

const CTABlock = ({ backgroundColor, text, items, button }) => {
  return (
    <div
      sx={{
        bg: backgroundColor,
        color: 'neutral.white',
        py: '3rem',
      }}
    >
      <Container>
        <div
          sx={{
            mb: '3.5rem',
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div>
          {items.map((item, index) => (
            <div
              sx={{
                pb: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '.75rem',
              }}
              key={index}
            >
              <img src={check} alt="" />
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
        <Button
          sx={{
            mt: '2rem',
          }}
          variant={button.buttonVariant}
        >
          {button.buttonText}
        </Button>
      </Container>
    </div>
  )
}

export default CTABlock
