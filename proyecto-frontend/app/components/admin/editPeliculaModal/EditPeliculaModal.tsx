import './EditPeliculaModal.css';
import { Button, Form, Modal } from "react-bootstrap";
import { Pelicula } from "../tablaPelicula/TablaPelicula";


interface EditPeliculaModalProps {
  show: boolean;
  handleClose: () => void;
  pelicula: Pelicula;
}

const EditMovieModal: React.FC<EditPeliculaModalProps> = ({ show, handleClose, pelicula }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editando película: {pelicula.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" defaultValue={pelicula.titulo} />
          </Form.Group>
          <Form.Group controlId="formSinopsis">
            <Form.Label>Sinopsis</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={pelicula.sinopsis} />
          </Form.Group>
          <Form.Group controlId="formFechaEstreno">
            <Form.Label>Fecha de Estreno</Form.Label>
            <Form.Control type="date" defaultValue={new Date(pelicula.fechaEstreno).toISOString().substring(0, 10)} />
          </Form.Group>
          <Form.Group controlId="formDuracion">
            <Form.Label>Duración</Form.Label>
            <Form.Control type="number" defaultValue={pelicula.duracion} />
          </Form.Group>
          <Form.Group controlId="formTitulo">
            <Form.Label>Enlace al Video</Form.Label>
            <Form.Control type="text" defaultValue={pelicula.urlVideo} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditMovieModal;