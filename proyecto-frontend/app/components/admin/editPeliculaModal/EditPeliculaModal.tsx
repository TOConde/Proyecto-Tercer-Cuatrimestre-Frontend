import './EditPeliculaModal.css';
import { Button, Form, Modal } from "react-bootstrap";
import { Pelicula } from "../tablaPelicula/TablaPelicula";
import { useEffect, useState } from 'react';
import { editMovie } from '@/app/services/Peliculas';


interface EditPeliculaModalProps {
  show: boolean;
  handleClose: () => void;
  pelicula: Pelicula;
  actualizarPeliculas: () => void;
}

const EditPeliculaModal: React.FC<EditPeliculaModalProps> = ({ show, handleClose, pelicula, actualizarPeliculas }) => {
  const [updatedPelicula, setUpdatedPelicula] = useState<Pelicula>(pelicula);

  useEffect(() => {
    setUpdatedPelicula(pelicula);
  }, [pelicula]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedPelicula({ ...updatedPelicula, [name]: value });
  }

  const handleSaveChange = async () => {
    try {
      const updatedDate = {
        ...updatedPelicula,
        fechaEstreno: new Date(updatedPelicula.fechaEstreno).toISOString().split('T')[0], //para convertir fecha a yyyy-mm-dd, y lo pueda cargar en la base datos
      }

      await editMovie(updatedPelicula.peliculaID, updatedDate);
      handleClose();
      actualizarPeliculas();
    } catch (error) {
      console.log('Error al actualizar la pelicula:', error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className='containerFormEditMovie'>
        <Modal.Title>Editando película: {pelicula.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='containerFormEditMovie'>
        <Form>
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" name='titulo' value={updatedPelicula.titulo} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formSinopsis">
            <Form.Label>Sinopsis</Form.Label>
            <Form.Control as="textarea" rows={3} name='sinopsis' value={updatedPelicula.sinopsis} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formFechaEstreno">
            <Form.Label>Fecha de Estreno</Form.Label>
            <Form.Control type="date" name='fechaEstreno' value={new Date(updatedPelicula.fechaEstreno).toISOString().substring(0, 10)} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formDuracion">
            <Form.Label>Duración</Form.Label>
            <Form.Control type="number" name='duracion' value={updatedPelicula.duracion} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formUrlVideo">
            <Form.Label>Enlace al Video</Form.Label>
            <Form.Control type="text" name='urlVideo' value={updatedPelicula.urlVideo} onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='containerFormEditMovie'>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary bttnGuardarCambios" onClick={handleSaveChange}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPeliculaModal;