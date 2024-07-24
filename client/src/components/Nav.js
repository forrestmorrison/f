import { Link } from 'react-router-dom'
import FLogo from '../images/f-logo.png'
import { GoBell, GoHomeFill, GoMail, GoPerson } from 'react-icons/go'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={FLogo} alt='' className='f-logo'/>
      <ul>
        <li><Link to='/'><GoHomeFill className='icon' />Home</Link></li>
        <li><Link to='/explore'><FaSearch className='icon' />Explore</Link></li>
        <li><Link to='/notifications'><GoBell className='icon' />Notifications</Link></li>
        <li><Link to='/messages'><GoMail className='icon' />Messages</Link></li>
        <li><Link to='/profile'><GoPerson className='icon' />Profile</Link></li>
        <li><button>POST</button></li>
      </ul>
    </div>
  )
}

export default Nav
