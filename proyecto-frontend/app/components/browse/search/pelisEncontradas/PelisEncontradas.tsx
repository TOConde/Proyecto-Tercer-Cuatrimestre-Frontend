import { useEffect, useState } from 'react';
import './PelisEncontradas.css';
import { getMovieByGenre, searchByTitle } from '@/app/services/Peliculas';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Movie {
  peliculaID: number;
  titulo: string;
  sinopsis: string;
  url_image: string;
  url_image_delete: string;
}

const PelisEncontradas: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const params = useSearchParams();
  const searchQuery = params.get('queary') || '';
  const genreQuery = params.get('genre') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let pelisEncontradas: Movie[] = [];

        if (searchQuery) {
          pelisEncontradas = await searchByTitle(searchQuery);
        } else if (genreQuery) {
          pelisEncontradas = await getMovieByGenre(genreQuery);
        }

        setMovies(pelisEncontradas);
      } catch (error) {
        console.error('Error encontrando peliculas:', error)
      }
    }

    fetchMovies();
  }, [searchQuery, genreQuery])

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