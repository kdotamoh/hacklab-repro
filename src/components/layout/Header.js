/** @jsxImportSource theme-ui */
import * as React from 'react'
import Navigation from './Navigation'
import { Button, Container } from 'theme-ui'

// @ts-ignore
import photo from '../../images/photo.png'

/**
 * @param {Object} props
 */
const Header = (props) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.white',
        mb: '5rem',
        height: '92vh',
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
      }}
    >
      <Navigation color="white" />
      <Container
        sx={{
          transform: 'translateY(50%)',
        }}
      >
        <h1
          sx={{
            pb: '1.25rem',
            fontSize: 'display2',
          }}
        >
          Hacklab <br /> Foundation
        </h1>
        <Button>Connect</Button>
      </Container>
    </div>
  )
}

export default Header
