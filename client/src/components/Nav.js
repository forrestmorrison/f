import FLogo from '../images/f-logo.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={FLogo} alt='' className='f-logo'/>
      <ul>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default Nav
