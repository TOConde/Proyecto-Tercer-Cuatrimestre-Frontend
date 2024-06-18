import { Button } from 'react-bootstrap';
import './ListaPelis.css'
import { getAllMovies } from '@/app/services/BrowsePeliculas';
import { useEffect, useState } from 'react';

interface Movie {
  peliculaID: number;
  titulo: string;
  sinopsis: string;
  url_image: string;
  url_image_delete: string;
}

export const ListaPelis = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = await getAllMovies();
        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
      <div className="containerListaRecomen">
        <div>
          <p>Lista de Recomendación</p>
        </div>
        <div className="row">
          {movies.map((movie, index) => (
            <div className="col" key={index}>
              <img className='imgMovie' src={movie.url_image} />
            </div>
          ))}
        </div>
      </div>
  );
}