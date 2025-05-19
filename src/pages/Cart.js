import React, {useContext} from 'react'
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'
import {CartContext} from '../context/CartContext'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const getTotal = () =>
    cartList.reduce((acc, item) => acc + item.dish_price * item.quantity, 0)

  return (
    <div>
      <Header />
      <div className='cart-page'>
        {cartList.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <button
              type='button'
              className='remove-all-btn'
              onClick={removeAllCartItems}
            >
              Remove All
            </button>
            <div className='cart-items-list'>
              {cartList.map(item => (
                <CartItem key={item.dish_id} item={item} />
              ))}
            </div>
            <div className='cart-total'>
              <h3>Total: ₹ {getTotal().toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
