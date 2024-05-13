import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './LoginButton.css'
import { loginUser } from '@/app/services/Login';

function LoginButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const usuario = {
      username,
      password
    };
    console.log(usuario);
    loginUser(usuario);
  };

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
        <form role="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="usrname"><span className="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" className="form-control" id="usrname" placeholder="Enter email" value={username} onChange={handleChangeUsername}/>
            </div>
            <div className="form-group">
              <label htmlFor="psw"><span className="glyphicon glyphicon-eye-open"></span> Password</label>
              <input type="text" className="form-control" id="psw" placeholder="Enter password" value={password} onChange={handleChangePassword}/>
            </div>
              <button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Login</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginButton;