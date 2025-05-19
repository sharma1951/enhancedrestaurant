import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const DishItem = ({dish}) => {
  const {addCartItem} = useContext(CartContext)
  const {
    dish_id,
    dish_name,
    dish_image,
    dish_currency,
    dish_price,
    dish_Availability,
    dish_quantity,
    addonCat,
  } = dish

  const showAddToCart = dish_Availability && dish_quantity > 0

  return (
    <div className='dish-item'>
      <img src={dish_image} alt={dish_name} className='dish-img' />
      <div>
        <h4>{dish_name}</h4>
        <p>
          {dish_currency} {dish_price}
        </p>
        <p>Available: {dish_Availability ? 'Yes' : 'No'}</p>
        <p>Quantity: {dish_quantity}</p>
        {addonCat && addonCat.length > 0 && (
          <p className='customizations'>Customizations available</p>
        )}
        {showAddToCart && (
          <button
            type='button'
            onClick={() => addCartItem(dish)}
            className='add-to-cart-btn'
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  )
}

export default DishItem
