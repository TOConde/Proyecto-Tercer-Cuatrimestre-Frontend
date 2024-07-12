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

  const handleChangeEmail = async () => {
    const user = {
      password
    }

    const passwordVerificada = await verificarUserPassword(user);

    if (passwordVerificada) {
      const userNewEmail = {
        email: newEmail
      }
      const cambioExitoso = await editUserEmail(userNewEmail);
      if (cambioExitoso) {
        alert("Se ha cambiado su email");
      } else {
        alert("Error al cambiar su email");
      }
    } else {
      alert("contraseña incorreta");
    } 
  };

  return (
    <Card className="change-email-card">
      <Card.Body>
        <Card.Title className="change-email-card-title">Cambiar correo</Card.Title>
        <Card.Text className="change-email-card-text">
          Cambia la dirección de correo que utilizas para acceder y recibir información de Flixorama.
        </Card.Text>
        <Form.Group className="change-email-form-group">
          <Form.Label>Correo actual</Form.Label>
          <Form.Control type="email" value={currentEmail} readOnly />
        </Form.Group>
        <Form.Group className="change-email-form-group">
          <Form.Label>Nuevo correo</Form.Label>
          <Form.Control 
            type="email" 
            value={newEmail} 
            onChange={(e) => setNewEmail(e.target.value)} 
            placeholder="Introduce el nuevo correo" 
          />
        </Form.Group>
        <Form.Group className="change-email-form-group">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Introduce tu contraseña para verificar" 
          />
        </Form.Group>
        <Button variant="primary" onClick={handleChangeEmail} className="change-email-button">
          Cambiar Email.
        </Button>
        <Card.Text className="change-email-support">
          ¿Tienes problemas? Ponte en contacto con nosotros en <Card.Link href="#">Soporte al cliente</Card.Link>.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChangeEmail;