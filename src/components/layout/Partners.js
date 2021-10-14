/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

/**
 * @param {Object} props
 */
const Partners = (props) => {
  const items = [
    {
      icon: 'adc',
    },
    {
      icon: 'certified',
    },
    {
      icon: 'design_thinking',
    },
    {
      icon: 'dreamoval',
    },
    {
      icon: 'giz',
    },
    {
      icon: 'global_shapers',
    },
    {
      icon: 'hapaspace',
    },
    {
      icon: 'honode',
    },
    {
      icon: 'ibm',
    },
    {
      icon: 'ninety3',
    },
    {
      icon: 'oracle',
    },
    {
      icon: 'reset',
    },
    {
      icon: 'stanbic',
    },
    {
      icon: 'tech_lab',
    },
    {
      icon: 'vodafone',
    },
  ]
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        mb: '10rem',
      }}
    >
      <h2
        sx={{
          pb: '1.25rem',
        }}
      >
        Our Partners
      </h2>
      <p>Our Proud sponsors and partners for Hacklab's Initiatives</p>
      <Container>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '2rem',
            mt: '3.5rem',
            px: '2rem',
            gap: 'auto',
            justifyContent: 'center',
          }}
        >
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const Item = (props) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexBasis: '25%',
        justifyContent: 'center',
      }}
    >
      <img
        sx={{
          width: '10rem',
          height: 'auto',
        }}
        src={`/static/${props.icon}.png`}
        alt=""
      />
    </div>
  )
}

export default Partners
