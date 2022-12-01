import React from 'react'
import './Header.css'
import {MdOutlineAccountCircle} from 'react-icons/md'

const Header = () => {
  return (
    <nav className='mountain__navBar'>
      <p>MNTN</p>
      <div className='mountain__navBar-links'></div>
      <div className='mountain__navBar-account'>
        <MdOutlineAccountCircle />
        <p>Account</p>
      </div>
    </nav>
  )
}

export default Header
