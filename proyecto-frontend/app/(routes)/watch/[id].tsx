import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Video } from '@/app/components/watch/video/Video';
import { getMovieById } from '@/app/services/Peliculas';
import { useRouter } from 'next/router';

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieById(Number(id));
        if (movieDetails && movieDetails.urlVideo) {
          setVideoUrl(movieDetails.urlVideo);
        } else {
          console.error(`No se encontró el video para la película con ID ${id}`);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className={styles.main}>
      {<Video src={videoUrl} />}
    </div>
  );
};

export default Watch;