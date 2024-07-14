import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Password.css';
import { editUserPassword, verificarUserPassword } from '@/app/services/User';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    } else {
      const user = {
        password
      }

      const passwordVerificada = await verificarUserPassword(user);

      if (passwordVerificada) {
        const userNewPassword = {
          password: newPassword
        }
        const cambioExitoso = await editUserPassword(userNewPassword);
        if (cambioExitoso) {
          alert("Se ha cambiado su contraseña");
        } else {
          alert("Error al cambiar su contraseña");
        }
      } else {
        alert("Contraseña inválida");
      }
    }
  };

  return (
    <Card className="change-password-card">
      <Card.Body>
        <Card.Title className="change-password-card-title">Cambiar contraseña</Card.Title>
        <Card.Text className="change-password-card-text">
          Escoge una contraseña única para mantener segura tu cuenta
        </Card.Text>
        <Form>
          <Form.Group className="change-password-form-group">
            <Form.Label htmlFor="current-password">Contraseña actual</Form.Label>
            <Form.Control
              type="password"
              id="current-password"
              name="current-password"
              placeholder="Ingresa tu contraseña actual"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="change-password-form-group">
            <Form.Label htmlFor="new-password">Nueva contraseña</Form.Label>
            <Form.Control
              type="password"
              id="new-password"
              name="new-password"
              placeholder="Ingresa tu nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              required
            />
            <Form.Text className="text-password">
              Mínimo 6 caracteres
            </Form.Text>
          </Form.Group>
          <Form.Group className="change-password-form-group">
            <Form.Label htmlFor="confirm-new-password">Confirmar nueva contraseña</Form.Label>
            <Form.Control
              type="password"
              id="confirm-new-password"
              name="confirm-new-password"
              placeholder="Confirma tu nueva contraseña"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              minLength={6}
              required
            />
          </Form.Group>
          <Button variant="primary" onClick={handleChangePassword} className="change-password-button">
            Cambiar contraseña
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ChangePassword;
