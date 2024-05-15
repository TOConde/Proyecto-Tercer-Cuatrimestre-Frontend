import './NavBar.css'
import { NavBarLogo } from './componenteNavBar/Logo';
import { NavBarExplorar } from './componenteNavBar/Explorar';
import { NavBarNoticias } from './componenteNavBar/Noticias';
import { NavBarLupa } from './componenteNavBar/Lupa';
import { NavBarUser } from './componenteNavBar/User';

//este navbar abría que hacerlo sticky
export const NavBarBrowse = () => {
  return (
    <div className='containerNav'>
      <div className='d-flex'>
        <NavBarLogo />
        <NavBarExplorar />
        <NavBarNoticias />
      </div>

      <div className='d-flex'>
        <NavBarLupa />
        <NavBarUser />
      </div>
    </div>
  );
}