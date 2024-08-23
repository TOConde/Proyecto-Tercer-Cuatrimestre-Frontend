import './MasGeneros.css';
import { useEffect, useState } from 'react';
import { getAllGeneros } from '@/app/services/Peliculas';
import Link from 'next/link';

const MasGeneros = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const allGeneros = await getAllGeneros();
        setGeneros(allGeneros);
      } catch (error) {
        console.error('Error fetching generos:', error);
      }
    };

    fetchGeneros();
  }, []);

  return (
    <div className='containerGenerosSearchButtons'>
      {generos.map((genero: any) => (
        <Link key={genero.generoID} className='generosSearchButtons' href={`/browse/search?genre=${genero.nombreGenero}`}>
          {genero.nombreGenero}
        </Link>
      ))}      
    </div>
  );
}

export default MasGeneros;