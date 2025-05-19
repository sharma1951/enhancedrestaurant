import React, {useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {CartContext} from '../context/CartContext'

const Header = () => {
  const navigate = useNavigate()
  const {cartList} = useContext(CartContext)
  const cartCount = cartList.reduce((acc, item) => acc + item.quantity, 0)

  const onLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className='header'>
      <Link to='/' className='header-title'>
        <h2>Restaurant</h2>
      </Link>
      <div className='header-right'>
        <span className='header-orders'>My Orders</span>
        <button
          type='button'
          data-testid='cart'
          className='header-cart-btn'
          onClick={() => navigate('/cart')}
        >
          Cart
          {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
        </button>
        <button type='button' className='header-logout-btn' onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
