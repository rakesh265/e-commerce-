import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import "../Styles/NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className='mobile-nav'>
        <MobileNav/>
      </div>
      <div className='desktop-nav'>
        <DesktopNav/>
      </div>
    </>
  )
}

export default NavBar