import { editUserNotifications, getUserById } from '@/app/services/User';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Notificaciones</Card.Title>
        <Form>
          <Form.Group controlId="formPais">
            <Form.Label>Idioma de los correos</Form.Label>
            <Form.Select>
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