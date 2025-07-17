import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
  id: number
  quantity: number
}

interface ShoppingCartContextTypes {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextTypes)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


export const ShoppingCartProvider = ({ children }: {
  children: ReactNode
}) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems(prevItems => {
      if (!cartItems?.find(cartItem => cartItem?.id === id)) {
        return [...prevItems, {
          id,
          quantity: 1
        }]
      } else {
        return cartItems?.map(cartItem => {
          if (cartItem?.id === id) {
            return {
              ...cartItem,
              quantity: cartItem?.quantity + 1
            }
          } else {
            return cartItem
          }
        })
      }
    })
  }


  function decrease

  return (
    <ShoppingCartContext.Provider value={{

    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

