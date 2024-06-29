import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Logic to handle password change
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Add further validation and submission logic here
    alert("Contraseña cambiada exitosamente");
  };

  return (
    <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <Card.Body>
        <Card.Title>Cambiar contraseña</Card.Title>
        <Card.Text>
          Escoge una contraseña única para mantener segura tu cuenta
        </Card.Text>
        <Form.Group>
          <Form.Label>Contraseña actual</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirmar nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu nueva contraseña"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Usa al menos 6 caracteres
        </Form.Text>
        <Button variant="primary" onClick={handleChangePassword} style={{ marginTop: '1rem' }}>
          Cambiar contraseña
        </Button>
        <Card.Text style={{ marginTop: '1rem' }}>
          Cambiar tu contraseña cerrará tu sesión en otros dispositivos. Tendrás que introducir en ellos tu nueva contraseña para acceder de nuevo a tu cuenta.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChangePassword;