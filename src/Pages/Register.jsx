import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form autoComplete="off">
            <input type="text" placeholder='username'  name='username' required />
            <input type="email" placeholder='email'  name='email' required />
            <input type="number" placeholder='mobile number'  name='mobile' required />
            <input type="password" name="password" id="password" placeholder='password' required />
            <button>Register</button>
            <p>This is an error</p>
            <span>Do you have an account? <Link to={`/login`}>Login</Link> </span>
        </form>
    </div>
  )
}

export default Register
