'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import { NavBarBrowse } from '../../components/browse/navBar/NavBar';
import styles from '../../page.module.css';

const Browse = () => {
  return (
    <main className={styles.main}>
      <NavBarBrowse />
    </main>
  );
}

export default withRoles(Browse,['USR'], '/');
