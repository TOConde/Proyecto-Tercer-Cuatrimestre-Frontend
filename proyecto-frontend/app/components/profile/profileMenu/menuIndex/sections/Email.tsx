import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChangeEmail() {
  const currentEmail = "";

  const handleChangeEmail = () => {
    // Logic to handle email change, such as sending a secure link
  };

  return (
    <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Cambiar correo</Card.Title>
        <Card.Text>
          Cambia la dirección de correo que utilizas para acceder y recibir información de Crunchyroll
        </Card.Text>
        <Form.Group>
          <Form.Label>Correo actual</Form.Label>
          <Form.Control type="email" value={currentEmail} readOnly />
        </Form.Group>
        <Card.Text>
          Cuando pulses sobre el botón a continuación se te enviará un enlace seguro a la bandeja de entrada de tu correo con instrucciones sobre cómo cambiar tu correo.
        </Card.Text>
        <Button variant="primary" onClick={handleChangeEmail}>
          Enviar enlace seguro
        </Button>
        <Card.Text style={{ marginTop: '1rem' }}>
          ¿Tienes problemas? Ponte en contacto con nosotros en <Card.Link href="#">Soporte al cliente</Card.Link>.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChangeEmail;