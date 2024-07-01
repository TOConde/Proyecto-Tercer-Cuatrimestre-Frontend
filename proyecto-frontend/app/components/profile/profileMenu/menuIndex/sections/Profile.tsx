import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Profile.css';
import { editUserProfile, getUserById } from '@/app/services/User';

function Profile() {

    const [nombre, setNombre] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [pais, setPais] = useState<string>('');
    const [fechaSuscripcion, setFechaSuscripcion] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserById();
                if (response.data) {
                    setNombre(response.data.nombre);
                    setEdad(response.data.edad);
                    setPais(response.data.pais);
                    let fecha = response.data.fechaDeSuscripcion;
                    const fechaFormateada = new Date(fecha).toISOString().split('T')[0];
                    setFechaSuscripcion(fechaFormateada);
                }
            } catch (error) {
                console.error('Error para recuperar la informacion del usuario.', error);
            }
        };

        fetchData();

    }, []);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    };

    const handleChangeEdad = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEdad(parseInt(e.target.value, 10));
    };

    const handleChangePais = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPais(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = {
            nombre,
            edad,
            pais
        }

        try {
            await editUserProfile(body);
            console.log('Perfil Editado.');
        } catch (error) {
            console.log('No se pudo editar el perfil.', error);
        }
    }

    return (
        <Card className="profile-card">
            <Card.Body className="profile-card-body">
                <Card.Title className="profile-card-title">Perfil</Card.Title>
                <Form onSubmit={handleSubmit} className="profile-form">
                    <Form.Group className="mb-3 profile-form-group" controlId="formNombre">
                        <Form.Label className="form-label">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" className="form-control" value={nombre} onChange={handleChangeName} />
                    </Form.Group>
                    <Form.Group className="mb-3 profile-form-group" controlId="formEdad">
                        <Form.Label className="form-label">Edad</Form.Label>
                        <Form.Control type="number" placeholder="" className="form-control" value={edad} onChange={handleChangeEdad} />
                    </Form.Group>
                    <Form.Group controlId="formPais" className="profile-form-group">
                        <Form.Label className="form-label">País</Form.Label>
                        <Form.Select as="select" className="form-control" value={pais} onChange={handleChangePais}>
                            <option value=""></option>
                            <option value="Argentina">Argentina</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Chile">Chile</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 profile-form-group" controlId="formFechaSuscripcion">
                        <Form.Label className="form-label">Fecha de Suscripción</Form.Label>
                        <Form.Control disabled type="date" placeholder="" className="form-control" value={fechaSuscripcion} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="profile-button">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Profile;