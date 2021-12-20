/** @jsxImportSource theme-ui */
import * as React from 'react'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'

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
  const [checkout, setCheckout] = React.useState({})
  const [cart, setCart] = React.useState([])
  const [singleItemPurchase, setSingleItemPurchase] = React.useState({})
  const [deliveryMethod, setDeliveryMethod] = React.useState({
    methodId: '',
    methodTitle: '',
    description: '',
    total: '0.00',
  })

  /**
   *
   * @param {Object} params
   * @param {Object} params.product
   * @param {Number} params.quantity
   * @param {Number} params.product_id
   * @param {Object[]} params.meta_data
   */
  const addToCart = ({ product, product_id, quantity, meta_data }) => {
    const checkId = (obj) => obj.product_id === product.databaseId
    if (cart.some(checkId)) {
      toast('The item you are trying to add is already in your cart', {})
      return false
    } else {
      setCart([...cart, { product, product_id, quantity, meta_data }])
      localStorage.setItem(
        'hacklab_cart',
        JSON.stringify([...cart, { product, product_id, quantity, meta_data }])
      )
      toast('Added to cart', {})
    }
  }

  const buyNow = ({ product, product_id, quantity, meta_data }) => {
    sessionStorage.setItem(
      'hacklab_buyNow',
      JSON.stringify({ product, product_id, quantity, meta_data })
    )
    setSingleItemPurchase({ product, product_id, quantity, meta_data })
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

  const getBuyNow = () => {
    const cachedBuyNow = sessionStorage.getItem('hacklab_buyNow')

    if (cachedBuyNow && !isEmpty(cachedBuyNow)) {
      setSingleItemPurchase(JSON.parse(cachedBuyNow))
      console.log('Buy now: Using cached!')
    } else {
      setSingleItemPurchase({})
    }
  }

  const proceedToCheckout = (order) => {
    setCheckout(order)
    sessionStorage.setItem('hacklab_checkout', JSON.stringify(order))
  }

  const completeOrder = () => {
    setCart([])
    setSingleItemPurchase({})
    setCheckout({})
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

  const incrementSingleItem = () => {
    let newItem = singleItemPurchase
    newItem.quantity += 1
    setSingleItemPurchase({ ...newItem })
  }

  const decrementSingleItem = () => {
    let newItem = singleItemPurchase
    if (newItem.quantity > 1) {
      newItem.quantity -= 1
    }
    setSingleItemPurchase({ ...newItem })
  }

  React.useEffect(() => {
    getLocalCart()
    getCheckout()
    getBuyNow()
  }, [])

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        buyNow,
        singleItemPurchase,
        addToCart,
        getLocalCart,
        removeLineItem,
        incrementQuantity,
        decrementQuantity,
        incrementSingleItem,
        decrementSingleItem,
        checkout,
        proceedToCheckout,
        completeOrder,
        cart,
        deliveryMethod,
        setDeliveryMethod,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
