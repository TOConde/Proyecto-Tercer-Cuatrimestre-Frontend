import styles from './page.module.css';
import { HomeIntro } from "./components/home/homeIntro/HomeIntro";
import { HomeAbout } from './components/home/homeAbout/HomeAbout';
import { Footer } from './components/footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntro />
        <HomeAbout />
        <Footer />
    </main>
  );
}
