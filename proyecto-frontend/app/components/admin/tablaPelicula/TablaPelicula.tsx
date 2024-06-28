'use client'
import { useEffect, useState } from 'react';
import './TablaPelicula.css';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { deleteMovies } from '@/app/services/Peliculas';
import EditPeliculaModal from '../editPeliculaModal/EditPeliculaModal';

export interface Pelicula {
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

interface TablaPeliculaProps {
  peliculas: Pelicula[];
  actualizarPeliculas: () => void;
}

const TablaPelicula: React.FC<TablaPeliculaProps> = ({ peliculas, actualizarPeliculas }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPelicula, setSelectedPelicula] = useState<Pelicula | null>(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPelicula(null);
  }

  const handleShowModal = (pelicula: Pelicula) => {
    setSelectedPelicula(pelicula);
    setShowModal(true);
  }

  const handleDelete = async (peliculaID: number) => {
    try {
      await deleteMovies(peliculaID);
      actualizarPeliculas();
    } catch (error) {
      console.log('Error al eliminar la pelicula:', error);
    }
  }

  return (
    <>
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
              <td>{new Date(pelicula.fechaEstreno).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
              <td>{pelicula.duracion}</td>
              <td>
                <FaEdit onClick={() => handleShowModal(pelicula)} className='editIconTabla' />
                <FaTrash onClick={() => handleDelete(pelicula.peliculaID)} className='deleteIconTabla' />
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {selectedPelicula && (
        <EditPeliculaModal
          show={showModal}
          handleClose={handleCloseModal}
          pelicula={selectedPelicula}
          actualizarPeliculas={actualizarPeliculas}
        />
      )}
    </>
  )
}

export default TablaPelicula;