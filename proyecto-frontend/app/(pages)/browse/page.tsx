'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import { NavBarBrowse } from '../../components/browse/navBar/navBar';
import styles from './page.module.css';
import { ListaPelis } from '@/app/components/browse/listaPelis/ListaPelis';
import { BrowseIntro } from '@/app/components/browse/intro/BrowseIntro';
import { ListaByGenero } from '@/app/components/browse/listaByGenero/ListaByGenero';

const Browse = () => {
  return (
    <main className={styles.main}>
      <NavBarBrowse />
      <BrowseIntro />
      <ListaPelis />
      <ListaByGenero titulo={`Lista de Acción`} genero={'Accion'} />
      <ListaByGenero titulo={`Lista de Drama`} genero={'Drama'} />
    </main>
  );
}

export default withRoles(Browse,['USR', 'ADM'], '/');
