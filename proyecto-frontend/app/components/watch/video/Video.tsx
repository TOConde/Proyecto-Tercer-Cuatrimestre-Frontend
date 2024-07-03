import './Video.css';

interface VideoProps {
  src: string;
}

export const Video = ({ src }: VideoProps) => {
  return (
    <div className='videoConteiner'>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="Band of Brothers | Trailer | Warner Bros. Entertainment"
        allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope
          picture-in-picture;
          web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
      </iframe>
    </div >
  );
}