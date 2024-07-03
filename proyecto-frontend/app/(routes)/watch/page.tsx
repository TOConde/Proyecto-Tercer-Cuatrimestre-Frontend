import styles from './page.module.css';
import { Video } from '@/app/components/watch/video/Video';

interface WatchProps {
  videoUrl: string;
}

export default function Watch({ videoUrl }: WatchProps) {
  return (
    <div className={styles.main}>
      <Video src={videoUrl}/>
    </div>
  );
}