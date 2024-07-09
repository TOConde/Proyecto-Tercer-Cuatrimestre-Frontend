'use client'

import { useSearchParams } from 'next/navigation';
import { withRoles } from '@/app/components/HOC/WithRoles';
import styles from '../page.module.css';
import { NavBarBrowse } from '@/app/components/browse/navBar/navBar';
import TituloSearch from '@/app/components/browse/search/titulo/TituloSearch';
import PelisEncontradas from '@/app/components/browse/search/pelisEncontradas/PelisEncontradas';


const Search = () => {
  const params = useSearchParams();

  const searchQuery = params.get('queary') || ''; 

  return (
    <main className={styles.main}>
      <NavBarBrowse />
      <TituloSearch searchQuery = {searchQuery}/>
      <PelisEncontradas searchQuery = {searchQuery}/>
    </main>
  );
}

export default withRoles(Search,['USR', 'ADM'], '/');
