import './ListaPelis.css'
import { getAllMovies } from '@/app/services/Peliculas';
import Link from 'next/link';
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
        setMovies(randomizeArray(allMovies).slice(0, 5));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const randomizeArray = (array: Movie[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="containerListaRecomen">
      <div>
        <p>Lista de Recomendación</p>
      </div>
      <div className="row">
        {movies.map((movie) => (
          <div className="col" key={movie.peliculaID}>
            <Link href={`watch/${movie.peliculaID}`}>
              <img className='imgMovie' src={movie.url_image} />              
              <div className='tituloLista'>{movie.titulo}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}