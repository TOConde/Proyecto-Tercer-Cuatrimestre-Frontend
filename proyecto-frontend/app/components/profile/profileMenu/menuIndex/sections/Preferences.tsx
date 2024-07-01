import React, { useEffect, useState } from 'react';
import { getAllGeneros } from '@/app/services/Peliculas';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Preferences.css';

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
        <Card className="preferences-card">
            <Card.Body className="preferences-card-body">
                <Card.Title className="preferences-card-title">Preferencias</Card.Title>
                <Card.Text className="preferences-card-text">
                    Seleccione sus gustos y preferencias de idioma
                </Card.Text>
                <Form>
                    <Form.Group className="preferences-form-group">
                        <Form.Label>Seleccione sus gustos</Form.Label>
                        <FloatingLabel controlId="floatingGeneros" label="Géneros" className="preferences-floating-label">
                            <Form.Select multiple className="preferences-form-select" onChange={handleSelectGenero}>
                                {generos.map((genero: any) => (
                                    <option key={genero.generoID} value={genero.generoID}>
                                        {genero.nombreGenero}
                                    </option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group controlId="formIdioma" className="preferences-form-group">
                        <Form.Label>Idioma de preferencia</Form.Label>
                        <Form.Control as="select">
                            <option>Español</option>
                            <option>Portugues</option>
                            <option>Ingles</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="preferences-button">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Preferences;