import './SinopsisWatch.css';

interface SinopsisWatchProps {
  sinopsis: string;
}

export const SinopsisWatch = ({ sinopsis }: SinopsisWatchProps) => {
  return (
    <div className='sinopsisContainer'>
      <p>{sinopsis}</p>
    </div>
  );
};