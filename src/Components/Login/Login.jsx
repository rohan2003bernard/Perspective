import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <form className='login' action="">
            <div className="title">
                <div className="login2">Login</div>
            </div>
            <div className="credentials">
                <input className='username' placeholder='Username' type="username" />
                <input className='password' placeholder='Password' type="password" />
            </div>
            <a href='#' className="msg">Forgot Password</a>
            <Link to='/signup' className='signup msg'>New User</Link>
            <button type="submit" className='submit'>Submit</button>
        </form>




    )
}

export default Login