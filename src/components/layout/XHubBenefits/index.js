/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'

const XHubBenefits = ({ heading, buttons, textColumns }) => {
  console.log('text column', textColumns)
  return (
    <Container
      sx={{
        width: ['92%', '92%', '82%'],
        pt: '4rem',
        pb: '8rem',
        borderTop: (theme) => `1px solid ${theme.colors?.muted}`,
        display: 'grid',
        gridTemplateColumns: ['100%', '100%', '1fr 1fr 1fr'],
        gap: '4rem',
      }}
    >
      <div
        sx={{
          alignItems: 'center',
        }}
      >
        <h3 dangerouslySetInnerHTML={{ __html: heading }} />
        <div
          sx={{
            display: 'flex',
            gap: '.75rem',
            mt: '2rem',
          }}
        >
          {buttons.map((button, index) => (
            <a key={index} href={button.linkUrl}>
              <Button variant={button.buttonVariant}>
                {button.buttonText}
              </Button>
            </a>
          ))}
        </div>
      </div>
      <div
        sx={{
          gridColumn: ['', '', '2 / span 2'],
          display: 'grid',
          gap: ['2rem', '2rem', '4rem'],
          gridTemplateColumns: ['100%', '100%', 'repeat(2, minmax(0, 1fr))'],
        }}
      >
        {textColumns.map(({ text }, index) => (
          <div
            key={index}
            sx={{
              p: {
                fontSize: 'paragraph2',
                lineHeight: 'paragraph2',
                pb: '.5rem',
              },
              h4: {
                fontSize: 'h4',
                pb: '.5rem',
              },
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </Container>
  )
}

export default XHubBenefits
