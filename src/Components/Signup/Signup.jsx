import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (

        <form className='Signup' action="">
            <div className="title">
                <div className="Signup2">Signup</div>
            </div>
            <div className="credentials">
                <input className='name' placeholder='Name' type="name" />
                <input className='organization' placeholder='Organization' type="text" />
                <input className='email' placeholder='Email' type="email" />
                <input className='password' placeholder='Password' type="password" />
                <input className='re-password password' placeholder='Retype Password' type="password" />
            </div>
            <Link to='/login' className='signup msg'>Existing User</Link>
            <button type="submit" className='submit'>Submit</button>
        </form>




    )
}

export default Signup