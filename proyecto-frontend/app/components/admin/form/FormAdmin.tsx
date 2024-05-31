import { FloatingLabel, Form } from 'react-bootstrap';
import './FormAdmin.css'

export const FormAdmin = () => {
  return (
    <div>
      <FloatingLabel controlId="floatingInput" label="Titulo pelicula" className="">
        <Form.Control type="text" placeholder="Titulo pelicula" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSinopsis" label="Sinopsis" className="">
        <Form.Control type="text" placeholder="Sinopsis" />
      </FloatingLabel>
      <FloatingLabel controlId="etc" label="etc" className="">
        <Form.Control type="text" placeholder="etc" />
      </FloatingLabel>
      <FloatingLabel controlId="etc2" label="etc2" className="">
        <Form.Control type="text" placeholder="etc2" />
      </FloatingLabel>
      <FloatingLabel controlId="etc3" label="etc3" className="">
        <Form.Control type="text" placeholder="etc3" />
      </FloatingLabel>
    </div>
  );
}