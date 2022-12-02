import React from 'react'
import './Header.css'
import {SiTwitter} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {BsArrowDown} from 'react-icons/bs'
import {SubHeading} from '../../components'

const Navbar = () => {
  return (
    <div className='mountain__header nav__padding'>
      <div className="mountain__header-social">
        <p>Follow Us</p>
        <SiTwitter className='twitter__logo header__icon' />
        <SiInstagram className='header__icon'/>
      </div>
      <div className="mountain__header-content">
        
        <SubHeading title="A HIKING GUIDE"/>
        <h1>Be Prepared For The <br/> Mountains And Beyond!</h1>
        <div className="mountain__header-content__down">
          <p>scroll down</p>
          <BsArrowDown className='header__icon'/>
        </div>
      </div>
      <div className="mountain__header-scroll">
        <ul>
          <li>Start</li>
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </ul>
        <div className='mountain__header-scroll__scrollbar'>
          <div className='mountain__header-scroll_scrollbar-link'/>
          <div className='mountain__header-scroll_scrollbar-link'/>
          <div className='mountain__header-scroll_scrollbar-link'/>
          <div className='mountain__header-scroll_scrollbar-link'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
