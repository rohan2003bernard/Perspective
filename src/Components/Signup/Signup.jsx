import { useRef } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    const name=useRef()
    const organization=useRef()
    const email=useRef()
    const password=useRef()
    const re_password=useRef()
    const onStore=()=>{
        localStorage.setItem('Name',name.current.value)
        localStorage.setItem('organization',organization.current.value)
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
        localStorage.setItem('re_password',re_password.current.value)
    }
    return (

        <form className='Signup' >
            <div className="title">
                <div className="Signup2">Signup</div>
            </div>
            <div className="credentials">
                <input className='name' placeholder='Name' type="name" ref={name} />
                <input className='organization' placeholder='Organization' type="text" ref={organization}/>
                <input className='email' placeholder='Email' type="email" ref={email} />
                <input className='password' placeholder='Password' type="password" ref={password}/>
                <input className='re-password password' placeholder='Retype Password' type="password" ref={re_password} />
            </div>
            <Link to='/login' className='signup msg'>Existing User</Link>
            <button type="submit" className='submit' onClick={onStore()}>Submit</button>
        </form>




    )
}

export default Signup