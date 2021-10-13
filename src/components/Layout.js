/** @jsxImportSource theme-ui */
import * as React from 'react'

import Announce from './layout/Announce'
import Footer from './layout/Footer'

/**
 * @typedef Props
 * @prop {React.ReactNode} children
 */

/**
 * @param {Props} props
 */
const Layout = (props) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <header>
        <Announce />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
