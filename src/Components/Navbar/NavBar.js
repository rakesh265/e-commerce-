import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import "../../Styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className='nav-mobile'>
        <MobileNav/>
      </div>
      <div className='nav-desktop'>
        <DesktopNav/>
      </div>
    </>
  );
};

export default NavBar;
