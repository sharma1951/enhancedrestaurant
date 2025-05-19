import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import {CartProvider} from './context/CartContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <CartProvider>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  </CartProvider>
)

export default App
