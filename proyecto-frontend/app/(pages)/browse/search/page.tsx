'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import styles from '../page.module.css';
import { NavBarBrowse } from '@/app/components/browse/navBar/navBar';


const Search = () => {
  return (
    <main className={styles.main}>
      <NavBarBrowse />
    </main>
  );
}

export default withRoles(Search,['USR', 'ADM'], '/');
