/** @jsxImportSource theme-ui */
import * as React from 'react'

export const NavigationContext = React.createContext()

export const NavigationProvider = ({ children }) => {
  /**
   * state
   */
  const [showSideNav, setShowSidenav] = React.useState(false)

  return (
    <NavigationContext.Provider value={[showSideNav, setShowSidenav]}>
      {children}
    </NavigationContext.Provider>
  )
}
