'use client'
import { Video } from '@/app/components/watch/Video';
import styles from './page.module.css';
import { getMovieById } from '@/app/services/Peliculas';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  urlVideo: string;
}

const Peliculas = () => {
  const params = useParams<{ id: string }>()
  const { id } = params;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieById(Number(id));
        setMovie(movieDetails)
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id])

  if (!movie) {
    return <div className={styles.loading}>Pelicula no encontrada</div>;
  }

  return (
    <div className={styles.main}>
      <Video src={movie.urlVideo} />
    </div>
  );
};

export default Peliculas;