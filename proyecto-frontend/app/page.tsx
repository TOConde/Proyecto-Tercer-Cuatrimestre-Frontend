import styles from './page.module.css';
import { HomeIntro } from "./components/home/homeIntro/HomeIntro";
import { Footer } from './components/footer/Footer';
import { Faq } from './components/home/faq/Faq';

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntro />
        <Faq />
        <Footer />
    </main>
  );
}
