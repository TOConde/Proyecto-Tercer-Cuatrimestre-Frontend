import './LoginButton.css';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { getInformacionUsuario, loginUser } from '@/app/services/Login';
import { useRouter } from 'next/navigation';

function LoginButton() {
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const router = useRouter();

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleShowClick = () => {
    setShow(!show);
    if (!show) {
      setEmail('');
      setPassword('');
      setLoginFailed(false);
    }
  };

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email,
      password
    };

    const loginExitoso = await loginUser(user);
    if (loginExitoso) {
      const userData = await getInformacionUsuario();
      if (userData?.role === "ADM") {
        router.push("./admin");
      } else {
        router.push("./browse");
      }
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <>
      <Button variant="primary" className='btn buttonLogin' onClick={handleShowClick}>
        Login
      </Button>

      <Modal show={show} onHide={handleShowClick}>
        <Modal.Header className='containerFormLogin'>
          <Modal.Title>Iniciar sesión en Flixorama</Modal.Title>
        </Modal.Header>
        <Modal.Body className='containerFormLogin'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                ref={inputRef}
                onChange={handleChangeEmail}
                isInvalid={loginFailed}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChangePassword}
                isInvalid={loginFailed}
              />
            </Form.Group>
            {loginFailed && (
              <div className="invalid-feedback d-block">
                Email o contraseña incorrectos.
              </div>
            )}
            <Button type="submit" className="btn btnLoginForm btn-success btn-block">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginButton;
