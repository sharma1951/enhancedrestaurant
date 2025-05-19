import React, {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCartItem = item => {
    setCartList(prevList => {
      const existingItem = prevList.find(i => i.dish_id === item.dish_id)
      if (existingItem) {
        return prevList.map(i =>
          i.dish_id === item.dish_id ? {...i, quantity: i.quantity + 1} : i,
        )
      }
      return [...prevList, {...item, quantity: 1}]
    })
  }

  const removeCartItem = dishId => {
    setCartList(prevList => prevList.filter(i => i.dish_id !== dishId))
  }

  const incrementCartItemQuantity = dishId => {
    setCartList(prevList =>
      prevList.map(i =>
        i.dish_id === dishId ? {...i, quantity: i.quantity + 1} : i,
      ),
    )
  }

  const decrementCartItemQuantity = dishId => {
    setCartList(prevList =>
      prevList
        .map(i => (i.dish_id === dishId ? {...i, quantity: i.quantity - 1} : i))
        .filter(i => i.quantity > 0),
    )
  }

  const removeAllCartItems = () => setCartList([])

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
