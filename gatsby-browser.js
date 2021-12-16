import React from 'react'
import './node_modules/react-modal-video/scss/modal-video.scss'
import './src/styles/index.css'

import { NavigationProvider } from './src/context/Navigation'
export const wrapRootElement = ({ element }) => (
  <NavigationProvider>{element}</NavigationProvider>
)
