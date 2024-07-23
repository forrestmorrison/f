import { Link } from 'react-router-dom'
import FLogo from '../images/f-logo.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={FLogo} alt='' className='f-logo'/>
      <ul>
        <li><Link to='/explore'>Explore</Link></li>
        <li><Link to='/notifications'>Notifications</Link></li>
        <li><Link to='/messages'>Messages</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}

export default Nav
