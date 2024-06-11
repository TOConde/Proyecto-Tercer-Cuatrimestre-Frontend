import Dropdown from 'react-bootstrap/Dropdown';
import './Explorar.css'

function NavBarExplorar() {
  return (
    <Dropdown className='conteinerExplorar'>
      <Dropdown.Toggle id="dropdown-basic" className='textExplorar btnExplorar'>
        Explorar
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropMenu'>
        <Dropdown.Item className='dropItem' href="#/action-1">Genero 1</Dropdown.Item>
        <Dropdown.Item className='dropItem' href="#/action-2">Genero 2</Dropdown.Item>
        <Dropdown.Item className='dropItem' href="#/action-3">Genero 3</Dropdown.Item>
      </Dropdown.Menu>      
    </Dropdown>
    
  );
}

export default NavBarExplorar;