'use client'
import './ProfileNavBar.css'
import { NavBarLogo } from './profileNavBarComponents/Logo';
import  NavBarExplorar  from './profileNavBarComponents/Explorar';
import { LogOutButton } from '../../global/logout/LogOut';

export const ProfileNavBar = () => {
  return (
    <nav className='navBar d-flex fixed-top'> 
      <div className='d-flex align-items-center nav-left'>
        <NavBarLogo />
        <NavBarExplorar />
      </div>
      <div className='d-flex align-items-center nav-right'>        
        <LogOutButton />
      </div>
    </nav>
  );
}