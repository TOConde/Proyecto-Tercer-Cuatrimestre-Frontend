import './TituloSearch.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const TituloSearch: React.FC = () => {
  const params = useSearchParams();
  const searchQuery = params.get('queary') || '';
  const genreQuery = params.get('genre') || '';
  const [titulo, setTitulo] = useState<string>('');

  useEffect(() => {
    if (searchQuery) {
      setTitulo(`Películas encontradas para titulo "${searchQuery}"`);
    } else if (genreQuery) {
      setTitulo(`Películas encontradas en género "${genreQuery}"`);
    } else {
      setTitulo('');
    }
  }, [searchQuery, genreQuery]);
  
  return (
    <div className='tituloSearchContainer'>
      <p className='tituloSearch'>{titulo}</p>
    </div>
  );
}

export default TituloSearch;