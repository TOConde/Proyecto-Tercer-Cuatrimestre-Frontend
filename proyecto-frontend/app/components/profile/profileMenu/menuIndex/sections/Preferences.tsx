import React, { useEffect, useState } from 'react';
import { getAllGeneros } from '@/app/services/Peliculas';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Preferences.css';
import { Col, Row } from 'react-bootstrap';
import { editUserPreferences, getUserById, getUserGeneros } from '@/app/services/User';

function Preferences() {
    const [generos, setGeneros] = useState([]);
    const [selectedGeneros, setSelectedGeneros] = useState<number[]>([]);
    const [idioma, setIdioma] = useState<string>('');

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                const allGeneros = await getAllGeneros();
                setGeneros(allGeneros);
            } catch (error) {
                console.error('Error fetching generos:', error);
            }
        };

        const fetchUserData = async () => {
            try {
                const response = await getUserById();
                if (response.data) {
                    setIdioma(response.data.idioma);
                }
                const userGeneros = await getUserGeneros();
                if (userGeneros.data) {
                    setSelectedGeneros(userGeneros.data.map((g: any) => g.generoID));
                }
            } catch (error) {
                console.error('Error para recuperar la informacion del usuario.', error);
            }
        };

        fetchGeneros();
        fetchUserData();
    }, []);

    const handleSelectGenero = (generoID: number) => {
        setSelectedGeneros((prev) => {
          if (prev.includes(generoID)) {
            return prev.filter(id => id !== generoID);
          } else {
            return [...prev, generoID];
          }
        });
      };

    const handleChangeIdioma = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIdioma(e.target.value);
    }

    const handleChangePreferences = async () => {
        const user = {
            idioma,
            generos: selectedGeneros
        }

        const cambioExitoso = await editUserPreferences(user);
        if (cambioExitoso) {
          alert("Se han cambiado sus preferencias");
        } else {
          alert("Error al cambiar sus preferencias");
        }
    }

    return (
        <Card className="preferences-card">
            <Card.Body className="preferences-card-body">
                <Card.Title className="preferences-card-title">Preferencias</Card.Title>
                <Card.Text className="preferences-card-text">
                    Seleccione su idioma de preferencia y sus gustos:
                </Card.Text>
                <Form.Group controlId="formIdioma" className="preferences-form-group">
                    <Form.Label>Idioma</Form.Label>
                    <Form.Select as="select" className="form-control" value={idioma} onChange={handleChangeIdioma}>
                        <option value=""></option>
                        <option value="Español">Español</option>
                        <option value="Portugues">Portugues</option>
                        <option value="Inglés">Inglés</option>
                    </Form.Select>
                </Form.Group>
                <Form>
                    <Form.Group controlId="formGeneros" className='formAdmLabel containerGenero'>
                        <Row>
                            {generos.map((genero: any) => (
                                <Col key={genero.generoID} xs={6}>
                                    <Form.Check
                                        type="checkbox"
                                        id={`genero-${genero.generoID}`}
                                        label={genero.nombreGenero}
                                        onChange={() => handleSelectGenero(genero.generoID)}
                                        checked={selectedGeneros.includes(genero.generoID)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Form.Group>
                    <Button variant="primary" onClick={handleChangePreferences} className="preferences-button">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Preferences;