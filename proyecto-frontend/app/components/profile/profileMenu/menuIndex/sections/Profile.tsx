import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Profile.css';

function Profile() {
    const [img, setImg] = useState<File | null>(null);
    const [fileName, setFileName] = useState('Formato .jpg/.jpeg/.png');

    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
            <Card.Body>
                <Card.Title>Perfil</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEdad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formPais">
                        <Form.Label>País</Form.Label>
                        <Form.Control as="select">
                            <option>Argentina</option>
                            <option>Brasil</option>
                            <option>Bolivia</option>
                            <option>Chile</option>
                            <option>Ecuador</option>
                            <option>Mexico</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFechaSuscripcion">
                        <Form.Label>Fecha de Suscripción</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBanner">
                        <Form.Label>Selecciona un banner</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <div className="formAdmLabel">
                        <label htmlFor="file" className="fileInputLabel">Seleccionar imagen...</label>
                        <input type="file" id="file" className="fileInput" onChange={handleChangeImg} />
                        {fileName && <span className="fileName">{fileName}</span>}
                    </div>
                    <Button variant="primary" type="submit">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Profile;