import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id)
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    } else {
      const newCartItems = [...cartItems]
      newCartItems[itemIndex].quantity++
      setCartItems(newCartItems)
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
