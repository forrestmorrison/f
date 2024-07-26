import { Link } from 'react-router-dom'
import FLogo from '../images/f-logo.png'
import { GoBell, GoHomeFill, GoMail, GoPerson } from 'react-icons/go'
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={FLogo} alt='' className='f-logo'/>
      <ul>
        <IconContext.Provider value={{ size: '40px' }}>
          <li><Link to='/'><GoHomeFill className='icon' /><h3>Home</h3></Link></li>
          <li><Link to='/explore'><FaSearch className='icon' /><h3>Explore</h3></Link></li>
          <li><Link to='/notifications'><GoBell className='icon' /><h3>Notifications</h3></Link></li>
          <li><Link to='/messages'><GoMail className='icon' /><h3>Messages</h3></Link></li>
          <li><Link to='/profile'><GoPerson className='icon' /><h3>Profile</h3></Link></li>
          <li><button>Post</button></li>
        </IconContext.Provider>
      </ul>
    </div>
  )
}

export default Nav
