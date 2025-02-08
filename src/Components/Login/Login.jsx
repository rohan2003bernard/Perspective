import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Login = () => {
    const data=useRef()
    const password=useRef()
    const onChange = () => {
        localStorage.setItem('username',data.current.value)
        localStorage.setItem('password',password.current.value)
    }
    

    return (

        <form className='login' onSubmit={()=>onChange}>
            <div className="title">
                <div className="login2">Login</div>
            </div>
            <div className="credentials">
                <input className='username' placeholder='Username' type="username" ref={data} />
                <input className='password' placeholder='Password' type="password" ref={password}/>
            </div>
            <a href='#' className="msg">Forgot Password</a>
            <Link to='/signup' className='signup msg'>New User</Link>
            <button type="submit" className='submit'>Submit</button>
        </form>




    )
}

export default Login