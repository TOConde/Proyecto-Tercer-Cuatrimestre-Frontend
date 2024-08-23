'use client'

import { withRoles } from '@/app/components/HOC/WithRoles';
import styles from './page.module.css';
import ProfileBanner from '@/app/components/profile/banner/ProfileBanner';
import ProfileImage from '@/app/components/profile/profileImage/ProfileImage';
import ProfileMenu from '@/app/components/profile/profileMenu/ProfileMenu';
import { ProfileNavBar } from '@/app/components/profile/profileNavBar/ProfileNavBar';

const Profile = () => {
  return (
    <main className={styles.main}>
      <ProfileBanner />
      <ProfileNavBar />
      <ProfileImage />
      <ProfileMenu />
    </main>
  );
}

export default withRoles(Profile, ['USR'], '/');
