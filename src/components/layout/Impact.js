/** @jsxImportSource theme-ui */
import { Container } from '@theme-ui/components'
import * as React from 'react'

/**
 * @param {Object} props
 */
const Impact = (props) => {
  const items = [
    {
      icon: 'hackathon',
      text: '10,000 People <br/> Impacted',
    },
    {
      icon: 'impact',
      text: '10,000 People <br/> Impacted',
    },
    {
      icon: 'internships',
      text: '10,000 People <br/> Impacted',
    },
    {
      icon: 'jobs',
      text: '10,000 People <br/> Impacted',
    },
    {
      icon: 'projects',
      text: '10,000 People <br/> Impacted',
    },
    {
      icon: 'startups',
      text: '10,000 People <br/> Impacted',
    },
  ]
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
        Impact
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
        src={`/static/${props.icon}.png`}
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
