'use client'
import { useState } from 'react';
import './TablaPelicula.css';
import { Pagination, Table } from 'react-bootstrap';
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

  const [currentPage, setCurrentPage] = useState(1);
  const peliculasPerPage = 5;

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const offset = (currentPage - 1) * peliculasPerPage; //Para que al pasar de pagina no repita las peliculas de la pag anterior
  const currentItems = peliculas.slice(offset, offset + peliculasPerPage);
  const pageCount = Math.ceil(peliculas.length / peliculasPerPage);

  const paginationItems = [];
  for (let number = 1; number <= pageCount; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number ===currentPage} onClick={() => handlePageClick(number)}>
        {number}
      </Pagination.Item>
    )
  }

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
          {currentItems.map((pelicula) =>
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

      <Pagination className='paginationTab'>
        <Pagination.First onClick={() => handlePageClick(1)} disabled={currentPage === 1}/>
        <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1} />
        {paginationItems}
        <Pagination.Next onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === pageCount} />
        <Pagination.Last onClick={() => handlePageClick(pageCount)} disabled={currentPage === pageCount} />
      </Pagination>

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

