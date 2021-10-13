/** @jsxImportSource theme-ui */
import * as React from 'react'

/**
 * @param {Object} props
 */
const Partners = (props) => {
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
    </div>
  )
}

export default Partners
