import './ImagenWatch.css';

interface ImagenWatchProps {
  url_image: string;
}

export const ImagenWatch = ({ url_image }: ImagenWatchProps) => {
  return (
    <div className='imagenContainer'>
      <img className='imagenInfoWatch' src={url_image} />
    </div>
  );
};