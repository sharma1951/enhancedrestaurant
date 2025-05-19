import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSubmit = async e => {
    e.preventDefault()
    setErrorMsg('')
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      navigate('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={onSubmit}>
        <label htmlFor='username'>USERNAME</label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label htmlFor='password'>PASSWORD</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
