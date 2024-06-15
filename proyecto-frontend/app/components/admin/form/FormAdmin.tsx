import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './FormAdmin.css'

export const FormAdmin = () => {
  return (
    <div className='containerFormAdm'>
      <FloatingLabel controlId="floatingInput" label="Titulo pelicula" className="formAdmLabel">
        <Form.Control type="text" placeholder="Titulo pelicula" className="containerFormInput"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSinopsis" label="Sinopsis" className="formAdmLabel">
        <Form.Control type="text" placeholder="Sinopsis" className="containerFormInput"/>
      </FloatingLabel>
      <FloatingLabel controlId="etc" label="etc" className="formAdmLabel">
        <Form.Control type="text" placeholder="etc" className="containerFormInput"/>
      </FloatingLabel>
      <FloatingLabel controlId="etc2" label="etc2" className="formAdmLabel">
        <Form.Control type="text" placeholder="etc2" className="containerFormInput"/>
      </FloatingLabel>
      <FloatingLabel controlId="etc3" label="etc3" className="formAdmLabel">
        <Form.Control type="text" placeholder="etc3" className="containerFormInput"/>
      </FloatingLabel>
      <Button className='bttnAgregar'>Agregar</Button>
    </div>
  );
}