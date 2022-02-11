/** @jsxImportSource theme-ui */
import { Container } from '@theme-ui/components'
import * as React from 'react'

/**
 * @param {Object} props
 * @param {Object} props.heading
 */
const Impact = ({ heading, items, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        py: '5rem',
      }}
    >
      <h2
        sx={{
          textAlign: 'center',
          mb: '2.75rem',
        }}
      >
        {heading}
      </h2>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: [
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ],
            rowGap: '3.75rem',
            px: ['0', '0', '2rem'],
          }}
        >
          {items.map((item, index) => (
            <ImpactItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * @param {Object} props
 * @param {string} props.icon
 * @param {string} props.text
 */
const ImpactItem = (props) => {
  return (
    <div
      sx={{
        display: 'flex',
        gap: ['1rem', '1rem', '1.5rem'],
        alignItems: 'center',
      }}
    >
      <img
        sx={{
          maxWidth: '3rem',
          maxHeight: '3rem',
        }}
        src={`${props.icon?.sourceUrl}`}
        alt=""
      />
      <p
        sx={{
          fontSize: 'paragraph1',
        }}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  )
}

export default Impact
