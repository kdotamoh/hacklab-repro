/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'

import Logo from '../components/svg/Logo'

/**
 * @param {Object} props
 */
const Footer = (props) => {
  const currentYear = new Date().getFullYear()

  return (
    <Container
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo width="7.5rem" />
        <p>© {currentYear} Hacklab. All rights reserved.</p>
      </div>
      <div
        sx={{
          display: 'flex',
        }}
      >
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Disclaimer</p>
      </div>
    </Container>
  )
}

export default Footer
