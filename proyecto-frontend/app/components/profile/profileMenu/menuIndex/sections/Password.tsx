import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Password.css';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Contraseña cambiada exitosamente");
  };

  return (
    <Card className="change-password-card">
      <Card.Body>
        <Card.Title className="change-password-card-title">Cambiar contraseña</Card.Title>
        <Card.Text className="change-password-card-text">
          Escoge una contraseña única para mantener segura tu cuenta
        </Card.Text>
        <Form.Group className="change-password-form-group">
          <Form.Label>Contraseña actual</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="change-password-form-group">
          <Form.Label>Nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="change-password-form-group">
          <Form.Label>Confirmar nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu nueva contraseña"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Text className="text-muted change-password-note">
          Usa al menos 6 caracteres
        </Form.Text>
        <Button variant="primary" onClick={handleChangePassword} className="change-password-button">
          Cambiar contraseña
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ChangePassword;