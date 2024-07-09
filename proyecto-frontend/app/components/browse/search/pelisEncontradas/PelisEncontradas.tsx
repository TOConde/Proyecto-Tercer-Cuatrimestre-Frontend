import { useEffect, useState } from 'react';
import './PelisEncontradas.css';
import { searchByTitle } from '@/app/services/Peliculas';
import Link from 'next/link';

interface TituloSearchProps {
  searchQuery: string;
}

interface Movie {
  peliculaID: number;
  titulo: string;
  sinopsis: string;
  url_image: string;
  url_image_delete: string;
}

const PelisEncontradas: React.FC<TituloSearchProps> = ({ searchQuery }) => {
  const [movies, setMovies] =useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const pelisEncontradas = await searchByTitle(searchQuery);
        setMovies(pelisEncontradas);
      }catch (error) {
        console.error('Error encontrando peliculas:', error)
      }      
    }

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery])

  return (
    <div className='pelisEncontradasContainer'>
      {movies.map((movie) => (
        <div key={movie.peliculaID} className='pelisEncontradasItem'>
          <Link href={`/watch/${movie.peliculaID}`}>
            <img className='imgMovie' src={movie.url_image} alt={movie.titulo} />
            <div className='tituloListaEncontrada'>{movie.titulo}</div>
          </Link>          
        </div>
      ))}
    </div>
  );
}

export default PelisEncontradas;