import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './LoginButton.css'

function LoginButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesion en Flixorama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form role="form">
            <div className="form-group">
              <label htmlFor="usrname"><span className="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="psw"><span className="glyphicon glyphicon-eye-open"></span> Password</label>
              <input type="text" className="form-control" id="psw" placeholder="Enter password" />
            </div>
              <button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Login</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginButton;