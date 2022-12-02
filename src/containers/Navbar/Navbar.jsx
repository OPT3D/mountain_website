import React from 'react'
import './Navbar.css'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {CgMenuRound} from 'react-icons/cg'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className='mountain__navBar nav__padding'>
      <p className='logo'>MNTN</p>
      <div className='mountain__navBar-links flex-center'>
        <p>Equipment</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
      <div className='mountain__navBar-account flex-center'>
        <MdOutlineAccountCircle className='account__icon' color='white' />
        <p> Account</p>
      </div>
      <div className="mountain__navbar-smallscreen">
      <CgMenuRound color='white' className='toggle__icon' fontSize={25} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className = 'mountain___navbar-smallscreen_menu'>
        <AiOutlineCloseCircle fontSize={25} className='overlay__close' onClick={() => setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen_links'>
      <li className='p__link' ><a href="#home">Equipment</a></li>
      <li className='p__link' ><a href="#home">About Us</a></li>
      <li className='p__link' ><a href="#home">Blog</a></li>
      <li className=' p__link mountain__navbar-smallscreen_menu-account'><p className='padding__right'> Account</p> <MdOutlineAccountCircle size={30} color='white' />
        </li>
    </ul>
    </div>)}
    </div>
    </nav>
  )
}

export default Navbar
