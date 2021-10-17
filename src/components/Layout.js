/** @jsxImportSource theme-ui */
import * as React from 'react'

import Announce from './layout/Announce'
import Footer from './layout/Footer'
import Newsletter from './layout/Newsletter'

/**
 * @typedef Props
 * @prop {React.ReactNode} [header]
 * @prop {React.ReactNode} children
 */

/**
 * @param {Props} props
 */
const Layout = ({ header, ...props }) => {
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
        {header}
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <>
          {props.children}
          <Newsletter />
        </>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
