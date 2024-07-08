'use client'

import { useSearchParams } from 'next/navigation';
import { withRoles } from '@/app/components/HOC/WithRoles';
import styles from '../page.module.css';
import { NavBarBrowse } from '@/app/components/browse/navBar/navBar';


const Search = () => {
  const params = useSearchParams();

  const searchQuery = params.get('query') || '';
 

  return (
    <main className={styles.main}>
      <NavBarBrowse /><br />
      <h1>Para la busqueda: "{params}"</h1>
      <h1>Encontramos las siguientes coincidencias</h1>
    </main>
  );
}

export default withRoles(Search,['USR', 'ADM'], '/');
