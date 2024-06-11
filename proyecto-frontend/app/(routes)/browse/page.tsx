'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import { NavBarBrowse } from '../../components/browse/navBar/NavBar';
import styles from '../../page.module.css';
import { ListaPelis } from '@/app/components/browse/listaPelis/ListaPelis';
import { BrowseIntro } from '@/app/components/browse/intro/BrowseIntro';

const Browse = () => {
  return (
    <main className={styles.main}>
      <NavBarBrowse />
      <BrowseIntro />
      <ListaPelis />
    </main>
  );
}

export default withRoles(Browse,['USR'], '/');
