import './TituloSearch.css';

interface TituloSearchProps {
  searchQuery: string;
}

const TituloSearch: React.FC<TituloSearchProps> = ({ searchQuery }) => {
  return (
    <div className='tituloSearchContainer'>
      <p className='tituloSearch'>Peliculas encontradas para "{searchQuery}":</p>
    </div>
  );
}

export default TituloSearch;