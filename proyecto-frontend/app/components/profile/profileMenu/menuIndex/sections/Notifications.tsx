import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function Notifications() {
  return (
    <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Notificaciones</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Idioma de los correos</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Check 
            type="switch"
            id="switch-notifications"
            label="Recibir correos"
          />
          <ListGroup style={{ marginTop: '1rem' }}>
            <ListGroup.Item>Ofertas de la tienda</ListGroup.Item>
            <ListGroup.Item>Noticias</ListGroup.Item>
            <ListGroup.Item>Actualización de promociones</ListGroup.Item>
          </ListGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Notifications;