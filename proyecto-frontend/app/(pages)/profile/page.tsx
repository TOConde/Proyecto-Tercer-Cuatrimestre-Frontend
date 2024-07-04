import styles from './page.module.css';
import ProfileBanner from '@/app/components/profile/banner/ProfileBanner';
import ProfileImage from '@/app/components/profile/profileImage/ProfileImage';
import ProfileMenu from '@/app/components/profile/profileMenu/ProfileMenu';

export default function Profile() {
    return (
      <main className={styles.main}>
        <ProfileBanner />
        <ProfileImage />
        <ProfileMenu />
      </main>
    );
  }
  