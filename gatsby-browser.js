import React from 'react'
import './src/styles/index.css'

import { NavigationProvider } from './src/context/Navigation'
export const wrapRootElement = ({ element }) => (
  <NavigationProvider>{element}</NavigationProvider>
)
