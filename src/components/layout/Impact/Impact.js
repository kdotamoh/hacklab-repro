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
        mb: '10rem',
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
      <Container>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '3.75rem',
            px: '2rem',
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
        gap: '1.5rem',
        display: 'flex',
        flex: '0 0 25%',

        alignItems: 'center',
      }}
    >
      <img
        sx={{
          maxWidth: '3rem',
          maxHeight: '3rem',
        }}
        src={`${props.icon.sourceUrl}`}
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
