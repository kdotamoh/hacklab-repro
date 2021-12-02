/** @jsxImportSource theme-ui */
import * as React from 'react'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 * @param {Object[]} defaultValues.cart
 */
const defaultValues = {
  cart: [],
  isOpen: false,
  loading: false,
  didJustAddToCart: false,
  onOpen: () => {},
  onClose: () => {},
  addVariantToCart: () => {},
  // addToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  /**
   * state
   */
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [cart, setCart] = React.useState(defaultValues.cart)
  const [loading, setLoading] = React.useState(false)
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false)

  const addVariantToCart = () => {}

  /**
   *
   * @param {Object} params
   * @param {Object} params.product
   * @param {Number} params.quantity
   */
  const addToCart = ({ product, quantity }) => {
    const checkId = (obj) => obj.id === product.id
    if (cart.some(checkId)) {
      alert('The item you are trying to add is already in your cart')
      return false
    } else {
      // const newCart = [product]
      setCart([...cart, { product, quantity }])
    }
  }

  const removeLineItem = () => {}
  const updateLineItem = () => {}

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        addToCart,
        removeLineItem,
        updateLineItem,
        checkout,
        cart,
        loading,
        didJustAddToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
