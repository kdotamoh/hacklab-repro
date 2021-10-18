/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'

const TextBlock = ({ content, ...props }) => {
  return (
    <Container
      sx={{
        mb: '6rem',
        li: {
          fontSize: 'h4',
          marginLeft: '1.5rem',
          py: '1rem',
        },
        p: {
          py: '1rem',
          lineHeight: 'h3',
        },
        h2: {
          pb: '2rem',
        },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default TextBlock
