import React, { useEffect, useState } from 'react';
import { editUserNotifications, getUserById } from '@/app/services/User';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import './Notifications.css';

function Notifications() {
  const [notificaciones, setNotificaciones] = useState<number>();
  const [switchNotificaciones, setSwitchNotificaciones] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById();
        if (response.data) {
          setNotificaciones(response.data.recibirCorreos);
          setSwitchNotificaciones(response.data.recibirCorreos === 1);
        }
      } catch (error) {
        console.error('Error para recuperar la información del usuario:', error);
      }
    };

    fetchData();
  }, []);

  const handleSwitchChange = async () => {
    const newSwitchValue = !switchNotificaciones;
    setSwitchNotificaciones(newSwitchValue);

    try {
      await editUserNotifications({ recibirCorreos: newSwitchValue ? 1 : 0 });
    } catch (error) {
      console.error('No se pudo modificar las notificaciones', error);
      setSwitchNotificaciones(!newSwitchValue);
    }
  };

  return (
    <Card className="notifications-card">
      <Card.Body className="notifications-card-body">
        <Card.Title className="notifications-card-title">Notificaciones</Card.Title>
        <Form>
          <Form.Group controlId="formPais" className="notifications-form-group">
            <Form.Label>Idioma de los correos</Form.Label>
            <Form.Select className="notifications-form-select">
              <option>Español</option>
              <option>Portugués</option>
              <option>Inglés</option>
            </Form.Select>
          </Form.Group>
          <Form.Check
            type="switch"
            id="switch-notifications"
            label="Recibir correos"
            checked={switchNotificaciones}
            onChange={handleSwitchChange}
            className="notifications-form-switch"
          />
          <ListGroup className="notifications-list-group">
            <ListGroup.Item className="notifications-list-group-item">Ofertas de la tienda</ListGroup.Item>
            <ListGroup.Item className="notifications-list-group-item">Noticias</ListGroup.Item>
            <ListGroup.Item className="notifications-list-group-item">Actualización de promociones</ListGroup.Item>
          </ListGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Notifications;