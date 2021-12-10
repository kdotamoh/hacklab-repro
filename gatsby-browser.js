import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-phone-number-input/style.css'
import './src/styles/index.css'

import { NavigationProvider } from './src/context/Navigation'
import { StoreProvider } from './src/context/Store'
export const wrapRootElement = ({ element }) => (
  <NavigationProvider>
    <StoreProvider>{element}</StoreProvider>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </NavigationProvider>
)
