import './RatingWatch.css';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

interface RatingWatchProps {
  ratingNumber: number;
}

export const RatingWatch = ({ ratingNumber }: RatingWatchProps) => {
  const cantidadEstrellas = (ratingNumber: number) => {
    const estrellaCompletas = Math.floor(ratingNumber);
    const estrellaMedia = ratingNumber % 1 >= 0.5 ? 1 : 0; //si el decimal de ratingNumber es mayor o igual a 0.5 se asigna 1 estrella
    const estrellaVacia = 5 - estrellaCompletas - estrellaMedia;
    const estrellas = [];

    for (let i = 0; i < estrellaCompletas; i++) {
      estrellas.push(<IoMdStar key={`completa-${i}`} />)      
    }

    if (estrellaMedia === 1) {
      estrellas.push(<IoMdStarHalf key={`media`} />)
    }

    for (let i = 0; i < estrellaVacia; i++) {
      estrellas.push(<IoMdStarOutline key={`vacia-${i}`} />)      
    }

    return estrellas;
  }

  return (
    <div className='ratingContainer'>
      {cantidadEstrellas(ratingNumber)}
      <p className='raitingNumber'>{ratingNumber}</p>
    </div>
  );
};