import { ImagenWatch } from './componentesInfoMovie/poster/ImagenWatch';
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

  return (
    <div className='infoMoviContainer'>
      <div className='infoTituloSinopContainer'>
        <TituloWatch titulo={titulo} />
        <SinopsisWatch sinopsis={sinopsis} />
      </div>
      <div className='infoImagenConteiner'>
        <ImagenWatch url_image={url_image} />
      </div>
    </div>
  );
};