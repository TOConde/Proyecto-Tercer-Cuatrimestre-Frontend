import Dropdown from 'react-bootstrap/Dropdown';
import './Explorar.css'
import { Col, Container, Row } from 'react-bootstrap';

function NavBarExplorar() {
  return (
    <Dropdown className='conteinerExplorar'>
      <Dropdown.Toggle id="dropdown-basic" className='textExplorar btnExplorar'>
        Explorar
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropMenu'>
        <Container className='containerDropMenu'>
          <Row className='rowExplorarMenu'>
            <Col><Dropdown.Item className='dropItem' href="/browse">Browse...</Dropdown.Item></Col>
            <Col><Dropdown.Item className='dropItem' href="/browse/search?genre=Acción">Acción</Dropdown.Item></Col>
            <Col ><Dropdown.Item className='dropItem' href="/browse/search?genre=Bélico">Bélico</Dropdown.Item></Col>
          </Row>
          <Row className='rowExplorarMenu'>
            <Col ><Dropdown.Item className='dropItem' href="/browse/search?genre=Comedia">Comedia</Dropdown.Item></Col>
            <Col><Dropdown.Item className='dropItem' href="/browse/search?genre=Terror">Terror</Dropdown.Item></Col>
            <Col><Dropdown.Item className='dropItem' href="/browse/search?genre=Romance">Romance</Dropdown.Item></Col>
          </Row>
          <Row className='rowExplorarMenu'>
            <Col><Dropdown.Item className='dropItem' href="/browse/search?genre=Western">Western</Dropdown.Item></Col>
            <Col><Dropdown.Item className='dropItem' href="/browse/search?genre=Ciencia%20Ficción">Ciencia Ficción</Dropdown.Item></Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavBarExplorar;