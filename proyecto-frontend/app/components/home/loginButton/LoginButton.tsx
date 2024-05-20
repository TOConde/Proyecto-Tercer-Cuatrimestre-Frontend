import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './LoginButton.css'
import { loginUser } from '@/app/services/Login';

function LoginButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  //const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  const handleChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };
  */

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };


  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e: any) => {
    //Todo esto va en servicio/login, de nuevo lo hago aca para agilizar ... son las 7AM estoy desde las 2AM pa.
    e.preventDefault();
    const body = {
      email,
      password
    }
    const response = await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const json = await response.json();
    console.log(json);

    /*En el console.log vemos que nos vuelve el token del backend, es importante xq asi como usamos bcrypt en back en front tenemos que desencriptar
    utilizando jwtDecode en el front ... Ya con esto lo unico que queda es routear con la info que nos viene y si es ADM, nos permite rutear a la pagina
    de administracion ... si es USR, se lo negamos ... todo eso va tambien con el tema de session storage, me fui a mimir pa mañana rematamos EZ.
    
    /*const usuario = {
      email,
      password
    };
    console.log(usuario);
    loginUser(usuario);
    */
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