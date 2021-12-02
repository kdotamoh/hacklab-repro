import React from 'react'
import './src/styles/index.css'

import { NavigationProvider } from './src/context/Navigation'
import { StoreProvider } from './src/context/Store'
export const wrapRootElement = ({ element }) => (
  <NavigationProvider>
    <StoreProvider>{element}</StoreProvider>
  </NavigationProvider>
)
