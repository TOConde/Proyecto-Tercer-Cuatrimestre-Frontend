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
        <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
            <Card.Body>
                <Card.Title>Perfil</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" className="containerFormInput" value={nombre} onChange={handleChangeName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEdad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" placeholder="" className="containerFormInput" value={edad} onChange={handleChangeEdad} />
                    </Form.Group>
                    <Form.Group controlId="formPais">
                        <Form.Label>País</Form.Label>
                        <Form.Select as="select" value={pais} onChange={handleChangePais}>
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
                    <Form.Group className="mb-3" controlId="formFechaSuscripcion">
                        <Form.Label>Fecha de Suscripción</Form.Label>
                        <Form.Control disabled type="date" placeholder="" value={fechaSuscripcion}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Profile;