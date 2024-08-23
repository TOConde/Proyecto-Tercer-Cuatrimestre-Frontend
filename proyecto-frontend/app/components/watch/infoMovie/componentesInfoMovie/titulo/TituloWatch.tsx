import './TituloWatch.css';

interface TituloWatchProps {
  titulo: string;
}

export const TituloWatch = ({ titulo }: TituloWatchProps) => {
  return (
    <div className='tituloContainer'>
      <p>{titulo}</p>
    </div>
  );
};