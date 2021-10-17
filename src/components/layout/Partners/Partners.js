/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

/**
 * @param {Object} props
 */
const Partners = ({ heading, subtitle, partnerLogos, ...props }) => {
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
        {heading}
      </h2>
      <p>{subtitle}</p>
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
          {partnerLogos?.map((item, index) => (
            <Logo key={index} {...{ item }} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const Logo = ({ item }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexBasis: '20%',
        justifyContent: 'center',
      }}
    >
      <img
        sx={{
          width: '10rem',
          height: 'auto',
        }}
        src={`${item.logo.sourceUrl}`}
        alt=""
      />
    </div>
  )
}

export default Partners
