import { NavBarBrowse } from '../components/browse/navBar/NavBar';
import styles from '../page.module.css';

export default function Browse() {
  return (
    <main className={styles.main}>
      <NavBarBrowse />
    </main>
  );
}
