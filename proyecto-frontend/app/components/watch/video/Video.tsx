import './Video.css';

interface VideoProps {
  src: string;
}

export const Video = ({ src }: VideoProps) => {
  return (
    <div className='videoContainer'>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};