/** @jsxImportSource theme-ui */
import * as React from 'react'
import { isEmpty } from 'lodash'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 * @param {Object[]} defaultValues.cart
 */
const defaultValues = {}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  /**
   * state
   */
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [cart, setCart] = React.useState(defaultValues.cart)

  /**
   *
   * @param {Object} params
   * @param {Object} params.product
   * @param {Number} params.quantity
   */
  const addToCart = ({ product, product_id, quantity, variation_id }) => {
    const checkId = (obj) => obj.product_id === product.databaseId
    if (cart.some(checkId)) {
      alert('The item you are trying to add is already in your cart')
      return false
    } else {
      setCart([...cart, { product, product_id, quantity, variation_id }])
      localStorage.setItem(
        'hacklab_cart',
        JSON.stringify([
          ...cart,
          { product, product_id, quantity, variation_id },
        ])
      )
    }
  }

  const getLocalCart = () => {
    // grab localCart from localStorage
    const cachedCart = localStorage.getItem('hacklab_cart')
    // if so, use cached
    if (cachedCart && cachedCart.length !== 0) {
      setCart(JSON.parse(cachedCart))
      console.log('Cart: Using cached!')
    } else {
      setCart([])
    }
  }

  const getCheckout = () => {
    const cachedCheckout = sessionStorage.getItem('hacklab_checkout')

    if (cachedCheckout && !isEmpty(cachedCheckout)) {
      setCheckout(JSON.parse(cachedCheckout))
      console.log('Checkout: Using cached!')
    } else {
      setCheckout({})
    }
  }

  const proceedToCheckout = (order) => {
    setCheckout(order)
    sessionStorage.setItem('hacklab_checkout', JSON.stringify(order))
  }

  const removeLineItem = (product_id) => {
    const newCart = cart.filter((product, productIndex) => {
      return product.product_id !== product_id
    })
    setCart(newCart)
    localStorage.setItem('hacklab_cart', JSON.stringify(newCart))
  }

  const incrementQuantity = ({ product_id, quantity }) => {
    let newCart = cart
    let objIndex = newCart.findIndex((obj) => obj.product_id === product_id)
    newCart[objIndex].quantity += 1

    setCart([...newCart])
    localStorage.setItem('hacklab_cart', JSON.stringify(newCart))
  }

  const decrementQuantity = ({ product_id, quantity }) => {
    let newCart = cart
    let objIndex = newCart.findIndex((obj) => obj.product_id === product_id)

    if (newCart[objIndex].quantity > 1) {
      newCart[objIndex].quantity -= 1
    }

    setCart([...newCart])
    localStorage.setItem('hacklab_cart', JSON.stringify(newCart))
  }

  React.useEffect(() => {
    getLocalCart()
    getCheckout()
  }, [])

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addToCart,
        getLocalCart,
        removeLineItem,
        incrementQuantity,
        decrementQuantity,
        checkout,
        proceedToCheckout,
        cart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
