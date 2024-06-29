'use client'
import { useState } from 'react';
import './TablaPelicula.css';
import { FormControl, InputGroup, Pagination, Table } from 'react-bootstrap';
import { FaEdit, FaSearch, FaTrash } from 'react-icons/fa';
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
  const [search, setSearch] = useState('')

  const filteredPeliculas = peliculas.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(search.toLowerCase())
  );

  const offset = (currentPage - 1) * peliculasPerPage; //Para que al pasar de pagina no repita las peliculas de la pag anterior
  const currentItems = filteredPeliculas.slice(offset, offset + peliculasPerPage);
  const pageCount = Math.ceil(filteredPeliculas.length / peliculasPerPage);

  const paginationItems = [];
  for (let number = 1; number <= pageCount; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageClick(number)}>
        {number}
      </Pagination.Item>
    )
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <InputGroup className="searchTableTitle">
        <FormControl
          placeholder="Buscar por título"
          value={search}
          onChange={handleSearchChange}
        />
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>

      <div className='containerMovieTable'>
        <Table striped hover variant="dark" bordered className='movieTable'>
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
      </div>

      <Pagination className='paginationTab'>
        <Pagination.First onClick={() => handlePageClick(1)} disabled={currentPage === 1} />
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