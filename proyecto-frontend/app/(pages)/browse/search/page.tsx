'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import styles from '../page.module.css';
import { NavBarBrowse } from '@/app/components/browse/navBar/navBar';
import TituloSearch from '@/app/components/browse/search/titulo/TituloSearch';
import PelisEncontradas from '@/app/components/browse/search/pelisEncontradas/PelisEncontradas';
import MasGeneros from '@/app/components/browse/search/masGeneros/MasGeneros';

const Search = () => {

  return (
    <main className={styles.main}>
      <NavBarBrowse />
      <TituloSearch />
      <PelisEncontradas/>
      <MasGeneros />
    </main>
  );
}

export default withRoles(Search,['USR', 'ADM'], '/');
