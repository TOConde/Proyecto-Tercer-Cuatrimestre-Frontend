import { ImagenWatch } from './componentesInfoMovie/poster/ImagenWatch';
import { RatingWatch } from './componentesInfoMovie/raiting/RatingWatch';
import { SinopsisWatch } from './componentesInfoMovie/sinopsis/SinopsisWatch';
import { TituloWatch } from './componentesInfoMovie/titulo/TituloWatch';
import './InfoMovie.css';

interface InfoMovieProps {
  movieInfo: {
    titulo: string;
    sinopsis: string;
    url_image: string;
  }
}

export const InfoMovie = ({ movieInfo }: InfoMovieProps) => {
  const { titulo, sinopsis, url_image } = movieInfo;
  const ratingNumber: number = Math.round((Math.random() * 5) * 10 ) / 10; //numero randmo 0 a 5

  return (
    <div className='infoMoviContainer'>
      <div className='infoTituloSinopContainer'>
        <TituloWatch titulo={titulo} />
        <RatingWatch ratingNumber={ratingNumber} />
        <SinopsisWatch sinopsis={sinopsis} />
      </div>
      <div className='infoImagenConteiner'>
        <ImagenWatch url_image={url_image} />
      </div>
    </div>
  );
};