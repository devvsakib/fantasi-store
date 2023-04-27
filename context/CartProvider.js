import { createContext, useState } from 'react'
import { toast } from 'react-hot-toast'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const itemIndex = cartItems.find((item) => item.slug === product.slug)
    if (!itemIndex) {
      const newCartItems = [...cartItems, product]
      setCartItems(newCartItems)
      toast.success("Added To Cart");
    }
    else{
      toast.error("Already Added")
    }
  }

  const removeFromCart = (productSlug) => {
    setCartItems(cartItems.filter((item) => item.slug !== productSlug))
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
