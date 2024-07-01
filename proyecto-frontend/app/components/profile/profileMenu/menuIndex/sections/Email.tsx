import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Email.css';

function ChangeEmail() {
  const currentEmail = "";

  const handleChangeEmail = () => {
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
        <Card.Text className="change-email-card-text">
          Cuando pulses sobre el botón a continuación se te enviará un enlace seguro a la bandeja de entrada de tu correo con instrucciones sobre cómo cambiar tu correo.
        </Card.Text>
        <Button variant="primary" onClick={handleChangeEmail} className="change-email-button">
          Enviar enlace seguro
        </Button>
        <Card.Text className="change-email-support">
          ¿Tienes problemas? Ponte en contacto con nosotros en <Card.Link href="#">Soporte al cliente</Card.Link>.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChangeEmail;