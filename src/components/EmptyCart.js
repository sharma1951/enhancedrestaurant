import React from 'react'

const EmptyCart = () => (
  <div className='empty-cart'>
    <img
      src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png'
      alt='empty cart'
      className='empty-cart-img'
    />
    <h3>Your Cart is Empty</h3>
    <p>Add something from the menu.</p>
  </div>
)

export default EmptyCart
