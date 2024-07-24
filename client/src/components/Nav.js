import { Link } from 'react-router-dom'
import FLogo from '../images/f-logo.png'
import { GoBell, GoHomeFill, GoMail, GoPerson } from 'react-icons/go'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={FLogo} alt='' className='f-logo'/>
      <ul>
        <li><GoHomeFill className='icon' /><Link to='/'>Home</Link></li>
        <li><FaSearch className='icon' /><Link to='/explore'>Explore</Link></li>
        <li><GoBell className='icon' /><Link to='/notifications'>Notifications</Link></li>
        <li><GoMail className='icon' /><Link to='/messages'>Messages</Link></li>
        <li><GoPerson className='icon' /><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}

export default Nav
