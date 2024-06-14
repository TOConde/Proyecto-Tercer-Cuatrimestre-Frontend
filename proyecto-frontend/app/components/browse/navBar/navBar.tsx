import './NavBar.css'
import { NavBarLogo } from './componenteNavBar/Logo';
import  NavBarExplorar  from './componenteNavBar/Explorar';
import { NavBarNoticias } from './componenteNavBar/Noticias';
import { NavBarLupa } from './componenteNavBar/Lupa';
import { NavBarUser } from './componenteNavBar/User';
import { LogOutButton } from '../../global/logout/LogOut';

export const NavBarBrowse = () => {
  return (
    <nav className='navBar d-flex fixed-top'> 
      <div className='d-flex align-items-center'>
        <NavBarLogo />
        <NavBarExplorar />
        <NavBarNoticias />
      </div>
      <div className='d-flex align-items-center'>
        <NavBarLupa />
        <LogOutButton />
        <NavBarUser />
      </div>
    </nav>
  );
}