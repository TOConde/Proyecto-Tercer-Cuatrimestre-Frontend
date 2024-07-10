import './RegisterButton.css';
import { registerUser } from '@/app/services/Register';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RegisterButton() {
    const [show, setShow] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleShowClick = () => {
        setShow(!show);
    }

    useEffect(() => {
        if (show && inputRef.current) {
            inputRef.current.focus();
        }
    }, [show])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        const registroExitoso = await registerUser(user)
        if (registroExitoso) {
            console.log('Usuario Creado.')
        } else {
            console.log('Error.')
        }
    }

    return (
        <>
            <Button variant="primary" className='btn buttonRegister' onClick={handleShowClick}>
                Register
            </Button>

            <Modal show={show} onHide={handleShowClick}>
                <Modal.Header closeButton className='containerFormRegister'>
                    <Modal.Title>Regístrese en Flixorama:</Modal.Title>
                </Modal.Header>
                <Modal.Body className='containerFormRegister'>
                    <form role="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="usrname"><span className="glyphicon glyphicon-user"></span>Email</label>
                            <input type="text" className="form-control inputRegister" id="usrname" placeholder="Enter email" value={email} ref={inputRef} onChange={handleChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psw"><span className="glyphicon glyphicon-eye-open"></span>Password</label>
                            <input type="password" className="form-control inputRegister" id="psw" placeholder="Enter password" value={password} onChange={handleChangePassword} />
                        </div>
                        <button type="submit" className="btn btnRegisterForm btn-success btn-block"><span className="glyphicon glyphicon-off"></span>Register</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterButton;
