import { useEffect, useState } from 'react';
import './TablaPelicula.css';
import { Button, Modal, Table } from 'react-bootstrap';
import clienteAxios from '@/app/services/Axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Pelicula {
  peliculaID: number;
  titulo: string;
  sinopsis: string;
  fechaEstreno: string;
  duracion: number;
  urlVideo: string;
  url_image: string;
  url_image_delete: string;
  display_url_image: string;
}


const TablaPelicula: React.FC = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const buscarPeliculas = async () => {
      try {
        const res = await clienteAxios.get('/peliculas/all');
        setPeliculas(res.data);
      } catch (error) {
        console.log('Error al buscar peliculas:', error);
      }
    }

    buscarPeliculas();
  }, [])

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleEdit = (peliculaID: number) => {
    // Hacer que habra el modal, traiga toda la info a editar de la peli clickeada etc.
  }

  const handleDelete = async (peliculaID: number) => {
    try {
      await clienteAxios.delete('/peliculas/${peliculaID}')
      setPeliculas(peliculas.filter(pelicula => pelicula.peliculaID !== peliculaID));
    } catch (error) {
      console.log('Error al eliminar la pelicula:', error);
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Sinopsis</th>
          <th>Fecha de Estreno</th>
          <th>Duración(min.)</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {peliculas.map((pelicula) =>
          <tr key={pelicula.peliculaID}>
            <td>{pelicula.titulo}</td>
            <td>{pelicula.sinopsis}</td>
            <td>{pelicula.fechaEstreno}</td>
            <td>{pelicula.duracion}</td>
            <td>
              <FaEdit onClick={handleShowModal} className='editIconTabla' />
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Editando... Guarde los cambios al salir</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleCloseModal}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <FaTrash onClick={() => handleDelete(pelicula.peliculaID)} className='deleteIconTabla' />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default TablaPelicula;