import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { editUserSubscription, getUserById } from '@/app/services/User';

function Subscriptions() {
  const [subscription, setSubscription] = useState<number>();
  const [tipoDeSuscripcion, setTipoDeSuscripcion] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById();
        if (response.data) {
          setSubscription(response.data.tipoDeSuscripcion);
        }
      } catch (error) {
        console.error('Error para recuperar la informacion del usuario.', error);
      }
    };

    fetchData();

  }, []);

  const handleCardClick = (cardId: number) => {
    setTipoDeSuscripcion(cardId);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const body = {
      tipoDeSuscripcion
    };

    try {
      await editUserSubscription(body);
      console.log('Perfil Editado.');
    } catch (error) {
      console.log('No se pudo editar el perfil.', error);
    }
  };

  const cardStyle = (cardId: number) => ({
    width: '18rem',
    border: tipoDeSuscripcion === cardId ? '2px solid blue' : '1px solid lightgray',
    cursor: 'pointer',
  });

  return (
    <Card style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Suscripciones</Card.Title>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card style={cardStyle(0)} onClick={() => handleCardClick(0)}>
            <Card.Body>
              <Card.Title>Free User</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">0.0$ Mensuales</Card.Subtitle>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Solo un dispositivo a la vez.</ListGroup.Item>
                <ListGroup.Item>Resolucion Full HD.</ListGroup.Item>
                <ListGroup.Item>Acceso limitado en películas y series.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card style={cardStyle(1)} onClick={() => handleCardClick(1)}>
            <Card.Body>
              <Card.Title>Premium User</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4999.0$ Mensuales</Card.Subtitle>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Hasta 4 dispositivos a la vez.</ListGroup.Item>
                <ListGroup.Item>Soporte de resolución 4k.</ListGroup.Item>
                <ListGroup.Item>Acceso ilimitado.</ListGroup.Item>
                <ListGroup.Item>50 descargas para disfrutar offline.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        {subscription !== null && (
          <div style={{ marginTop: '1rem' }}>
            <h4>Suscripción actual:</h4>
            <p>{subscription === 0 ? "Free User" : "Premium User"}</p>
          </div>
        )}
        <Button variant="primary" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
          Gestionar método de pago
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Subscriptions;