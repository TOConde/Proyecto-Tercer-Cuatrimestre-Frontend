import styles from './page.module.css';
import { HomeIntro } from "./components/home/homeIntro/HomeIntro";

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntro />
    </main>
  );
}
