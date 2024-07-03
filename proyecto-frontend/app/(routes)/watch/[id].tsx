import styles from './page.module.css';
import { getMovieById } from '@/app/services/Peliculas';
import { useRouter } from 'next/router';

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetchMovieDetails = async () => {
    try {
      const movieDetails = await getMovieById(Number(id));
      console.log(movieDetails)
    } catch (error) {
      console.log('Error fetching movie details:', error);
    }
  }

  fetchMovieDetails();

  return (
    <div className={styles.main}>
      <h1>watch {id}</h1>
    </div>
  );
};

export default Watch;