/** @jsxImportSource theme-ui */
import * as React from 'react'

import Announce from './layout/Announce'
import Footer from './layout/Footer'
import Newsletter from './layout/Newsletter'
import Sidenav from './layout/Sidenav'
import { NavigationContext } from '../context/Navigation'

/**
 * @typedef Props
 * @prop {React.ReactNode} [navigation]
 * @prop {React.ReactNode} children
 */

/**
 * @param {Props} props
 */
const Layout = ({ navigation, ...props }) => {
  const [showSideNav, setShowSidenav] = React.useContext(NavigationContext)

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Sidenav {...{ showSideNav, setShowSidenav }} />

      <div>
        <Announce />
        {navigation}
      </div>
      <div
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <>
          {props.children}
          <Newsletter />
        </>
      </div>
      <Footer />
    </div>
  )
}

/**
 * @typedef StoreProps
 * @prop {React.ReactNode} [navigation]
 * @prop {React.ReactNode} children
 */

/**
 * @param {StoreProps} props
 */
export const StoreLayout = ({ navigation, ...props }) => {
  const [showSideNav, setShowSidenav] = React.useContext(NavigationContext)

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Sidenav {...{ showSideNav, setShowSidenav }} isStore={true} />

      <div>
        <Announce />
        {navigation}
      </div>
      <div
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <>
          {props.children}
          <Newsletter />
        </>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
