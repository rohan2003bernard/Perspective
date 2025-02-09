import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import CryptoJS from 'crypto-js'

const Login = () => {
    const data = useRef()
    const password = useRef()
    
    const onChange = (event) => {
        event.preventDefault()
        const encryptedPassword = CryptoJS.AES.encrypt(password.current.value, 'secret-key').toString()
        localStorage.setItem('username', data.current.value)
        localStorage.setItem('password', encryptedPassword)
    }

    const getPassword = () => {
        const encryptedPassword = localStorage.getItem('password')
        if (encryptedPassword) {
            const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret-key')
            // return bytes.toString(CryptoJS.enc.Utf8)
            console.log(bytes.toString(CryptoJS.enc.Utf8))
        }
        return ''
    }

    return (

        <form className='login' onSubmit={()=>onChange}>
            <div className="title">
                <div className="login2">Login</div>
            </div>
            <div className="credentials">
                <input className='username' placeholder='Username' type="text" ref={data} />
                <input className='password' placeholder='Password' type="password" ref={password} />
            </div>
            <a href='#' className="msg">Forgot Password</a>
            <Link to='/signup' className='signup msg'>New User</Link>
            <button type="submit" className='submit' onClick={onChange()}>Submit</button>
        </form>
    )
}

export default Login