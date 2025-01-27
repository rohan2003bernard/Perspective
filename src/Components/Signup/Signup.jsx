import React from 'react'
import './Signup.css'

const Signup = () => {
    return (

        <form className='Signup' action="">
            <div className="title">
                <div className="Signup2">Signup</div>
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

export default Signup