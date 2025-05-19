import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const CartItem = ({item}) => {
  const {removeCartItem, incrementCartItemQuantity, decrementCartItemQuantity} =
    useContext(CartContext)

  const {dish_id, dish_name, dish_image, dish_currency, dish_price, quantity} =
    item

  const totalPrice = (dish_price * quantity).toFixed(2)

  return (
    <div className='cart-item'>
      <img src={dish_image} alt={dish_name} className='cart-item-image' />
      <div className='cart-item-details'>
        <h4>{dish_name}</h4>
        <p>
          {dish_currency} {totalPrice}
        </p>
        <div className='cart-item-controls'>
          <button
            type='button'
            onClick={() => decrementCartItemQuantity(dish_id)}
            aria-label='decrement'
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type='button'
            onClick={() => incrementCartItemQuantity(dish_id)}
            aria-label='increment'
          >
            +
          </button>
          <button
            type='button'
            onClick={() => removeCartItem(dish_id)}
            aria-label='remove'
            className='remove-btn'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
