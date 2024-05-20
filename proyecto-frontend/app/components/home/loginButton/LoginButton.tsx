import './LoginButton.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { loginUser } from '@/app/services/Login';
import { useRouter } from 'next/navigation';


function LoginButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    await loginUser(user, router);
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
              <label htmlFor="usrname"><span className="glyphicon glyphicon-user"></span>Email</label>
              <input type="text" className="form-control" id="usrname" placeholder="Enter email" value={email} onChange={handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="psw"><span className="glyphicon glyphicon-eye-open"></span>Password</label>
              <input type="text" className="form-control" id="psw" placeholder="Enter password" value={password} onChange={handleChangePassword}/>
            </div>
              <button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span>Login</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginButton;