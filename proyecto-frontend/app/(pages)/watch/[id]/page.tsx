'use client'
import styles from './page.module.css';
import { getMovieById } from '@/app/services/Peliculas';
import { useParams } from 'next/navigation';


const Peliculas = () => {
  const params = useParams<{ id: string }>()
  const { id } = params;

  /* const fetchMovieDetails = async () => {
    try {
      const movieDetails = await getMovieById(Number(id));
      console.log(movieDetails)
    } catch (error) {
      console.log('Error fetching movie details:', error);
    }
  }
  fetchMovieDetails();
 */
  console.log(params)

  return (
    <div className={styles.main}>
      <h1>watch {id}</h1>
    </div>
  );
};

export default Peliculas;