'use client'

import styles from './page.module.css';
import { HomeIntro } from "./components/home/homeIntro/HomeIntro";
import { HomeAbout } from './components/home/homeAbout/HomeAbout';
import { HomeSuscriptions } from './components/home/subscriptions/HomeSubscriptions';
import { Faq } from './components/home/faq/Faq';
import { useEffect } from 'react';
import { getInformacionUsuario } from './services/Login';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const redireccionarUsuarioLogeado = async () => {
    try {
      const userData = await getInformacionUsuario();
      if (userData?.role === "ADM") {
        router.push("./admin");
      } else {
        router.push("./browse");
      }
    } catch {
      localStorage.removeItem('accessToken');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      redireccionarUsuarioLogeado();
    }
  }, []);

  return (
    <main className={styles.main}>
      <HomeIntro />
      <HomeAbout />
      <HomeSuscriptions />
      <Faq />
    </main>
  );
}
