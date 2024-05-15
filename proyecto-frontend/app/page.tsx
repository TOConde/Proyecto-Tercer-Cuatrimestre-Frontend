'use client'
import styles from './page.module.css';
import { HomeIntro } from "./components/home/homeIntro/HomeIntro";
import { HomeAbout } from './components/home/homeAbout/HomeAbout';
import { HomeSuscriptions } from './components/home/subscriptions/HomeSubscriptions';
import { Footer } from './components/footer/Footer';
import { Faq } from './components/home/faq/Faq';

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntro />
        <HomeAbout />
        <HomeSuscriptions />
        <Faq />        
    </main>
  );
}
