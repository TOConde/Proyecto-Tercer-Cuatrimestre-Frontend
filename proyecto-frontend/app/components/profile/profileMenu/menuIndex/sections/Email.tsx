import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Email.css';
import { editUserEmail, getUserById, verificarUserPassword } from '@/app/services/User';

function ChangeEmail() {
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserById();
        if (response.data) {
          setCurrentEmail(response.data.email);
        }
      } catch (e) {
        console.error('Error para recuperar la informacion del usuario.', e);
      }
    };

    fetchUserData();
  }, []);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com$/;
    const isValid = emailRegex.test(e.target.value);
    setNewEmail(e.target.value);
    setEmailValid(isValid);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      password
    };

    const passwordVerificada = await verificarUserPassword(user);

    if (passwordVerificada) {
      const userNewEmail = {
        email: newEmail
      };
      const cambioExitoso = await editUserEmail(userNewEmail);
      if (cambioExitoso) {
        alert("Se ha cambiado su email");
      } else {
        alert("Error al cambiar su email");
      }
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <Card className="change-email-card">
      <Card.Body>
        <Card.Title className="change-email-card-title">Cambiar correo</Card.Title>
        <Card.Text className="change-email-card-text">
          Cambia la dirección de correo que utilizas para acceder y recibir información de Flixorama.
        </Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="change-email-form-group">
            <Form.Label htmlFor="current-email">Correo actual</Form.Label>
            <Form.Control
              type="email"
              id="current-email"
              value={currentEmail}
              readOnly
            />
          </Form.Group>
          <Form.Group className="change-email-form-group">
            <Form.Label htmlFor="new-email">Nuevo correo</Form.Label>
            <Form.Control
              type="email"
              id="new-email"
              name="new-email"
              value={newEmail}
              onChange={handleChangeEmail}
              isInvalid={!emailValid}
              placeholder="Introduce el nuevo correo"
              required
            />
            <Form.Control.Feedback type="invalid">
              El email no es válido. Debe ser del formato usuario@dominio.com
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="change-email-form-group">
            <Form.Label htmlFor="password">Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="Introduce tu contraseña para verificar"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="change-email-button">
            Cambiar Email
          </Button>
        </Form>
        <Card.Text className="change-email-support">
          ¿Tienes problemas? Ponte en contacto con nosotros en <Card.Link href="#">Soporte al cliente.</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChangeEmail;
