import './RegisterButton.css';
import { registerUser } from '@/app/services/Register';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RegisterButton() {
    const [show, setShow] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [isAdult, setIsAdult] = useState(false);

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value);
        const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com$/;
        setEmailValid(emailRegex.test(e.target.value));
    };

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleCheckIsAdult = (e: any) => {
        setIsAdult(e.target.checked);
    };

    const handleShowClick = () => {
        setShow(!show);
        if (show) {
            setEmail('');
            setPassword('');
            setValidated(false);
            setEmailValid(true);
            setIsAdult(false);
        }
    };

    useEffect(() => {
        if (show && inputRef.current) {
            inputRef.current.focus();
        }
    }, [show]);

    const handleSubmit = async (e: any) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false || !emailValid || !isAdult) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            const user = { email, password };
            const registroExitoso = await registerUser(user);
            if (registroExitoso) {
                console.log('Usuario Creado.');
            } else {
                console.log('Error.');
            }
        }

        setValidated(true);
    };

    return (
        <>
            <Button variant="primary" className='btn buttonRegister' onClick={handleShowClick}>
                Register
            </Button>

            <Modal show={show} onHide={handleShowClick}>
                <Modal.Header className='containerFormRegister'>
                    <Modal.Title>Regístrese en Flixorama:</Modal.Title>
                </Modal.Header>
                <Modal.Body className='containerFormRegister'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    ref={inputRef}
                                    onChange={handleChangeEmail}
                                    isInvalid={!emailValid}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    El email debe ser del formato usuario@dominio.com
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={handleChangePassword}
                                required
                                minLength={6}
                            />
                            <Form.Control.Feedback type="invalid">
                                La contraseña debe contener mínimo 6 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formIsAdult">
                            <Form.Check
                                type="checkbox"
                                label="Soy mayor de edad"
                                checked={isAdult}
                                onChange={handleCheckIsAdult}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="btn btnRegisterForm btn-success btn-block">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterButton;
