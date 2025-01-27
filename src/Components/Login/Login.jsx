import React from 'react'
import './Login.css'

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
            <a href='#' className="forgot-password">Forgot Password</a>
            <button type="submit" className='submit'>Submit</button>
        </form>




    )
}

export default Login