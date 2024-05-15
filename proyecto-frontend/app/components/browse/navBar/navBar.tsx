import './NavBar.css'
import { NavBarLogo } from './componenteNavBar/Logo';
import { NavBarExplorar } from './componenteNavBar/Explorar';
import { NavBarNoticias } from './componenteNavBar/Noticias';
import { NavBarLupa } from './componenteNavBar/Lupa';
import { NavBarUser } from './componenteNavBar/User';

//este navbar abría que hacerlo sticky
export const NavBarBrowse = () => {
  return (
    <div className='containerNav d-flex'>
      <div className='d-flex align-items-center'>
        <NavBarLogo />
        <NavBarExplorar />
        <NavBarNoticias />
      </div>
      <div className='d-flex align-items-center'>
        <NavBarLupa />
        <NavBarUser />
      </div>
    </div>
  );
}