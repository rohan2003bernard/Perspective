import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <Link to='/' className='logo'><h1>Perspective</h1></Link>
      
      <ul>
        <li><Link to='/login' className='login'>Login</Link></li>
        <li><Link to='/signup' className='signup'>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Header
