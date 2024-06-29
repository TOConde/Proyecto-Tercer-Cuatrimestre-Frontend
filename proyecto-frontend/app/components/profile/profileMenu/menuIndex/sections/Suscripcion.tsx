import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Subscriptions() {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardId: any) => {
    setSelectedCard(cardId);
  };

  const handleSubmit = () => {
    // Add submission logic here
  };

  const cardStyle = (cardId: any) => ({
    width: '18rem',
    border: selectedCard === cardId ? '2px solid blue' : '1px solid lightgray',
    cursor: 'pointer',
  });

  return (
    <Card style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Suscripciones</Card.Title>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card style={cardStyle(1)} onClick={() => handleCardClick(1)}>
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle 1</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={cardStyle(2)} onClick={() => handleCardClick(2)}>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle 2</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
          Submit
        </Button>
        {selectedCard && (
          <div style={{ marginTop: '1rem' }}>
            <h4>Selected Card:</h4>
            <p>Card Title {selectedCard}</p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Subscriptions;