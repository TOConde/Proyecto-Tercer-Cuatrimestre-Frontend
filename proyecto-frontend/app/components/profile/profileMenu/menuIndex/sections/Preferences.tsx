import { getAllGeneros } from '@/app/services/AgregarPelicula';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Preferences() {
    const [generos, setGeneros] = useState([]);
    const [selectedGeneros, setSelectedGeneros] = useState<number[]>([]);

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                const allGeneros = await getAllGeneros();
                setGeneros(allGeneros);
            } catch (error) {
                console.error('Error fetching generos:', error);
            }
        };

        fetchGeneros();
    }, []);

    const handleSelectGenero = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const options = Array.from(e.target.options);
        const selected: number[] = [];
        options.forEach((option) => {
            if (option.selected) {
                selected.push(Number(option.value));
            }
        });
        setSelectedGeneros(selected);
    };

    return (
        <Card style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
            <Card.Body>
                <Card.Title>Preferencias</Card.Title>
                <Card.Text>
                    Seleccione sus gustos y preferencias de idioma
                </Card.Text>
                <Form>
                    <Form.Group>
                        <Form.Label>Seleccione sus gustos</Form.Label>
                        <FloatingLabel controlId="floatingGeneros" label="Géneros" className="formAdmLabel">
                            <Form.Select multiple className="containerFormInput containerGenero" onChange={handleSelectGenero}>
                                {generos.map((genero: any) => (
                                    <option key={genero.generoID} value={genero.generoID}>
                                        {genero.nombreGenero}
                                    </option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group controlId="formIdioma" style={{ marginTop: '1rem' }}>
                        <Form.Label>Idioma de preferencia</Form.Label>
                        <Form.Control as="select">
                            <option>Español</option>
                            <option>Portugues</option>
                            <option>Ingles</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Preferences;