import Profile from '../menuIndex/sections/Profile';
import Email from './sections/Email';
import Notifications from './sections/Notifications';
import Password from './sections/Password';
import Preferences from './sections/Preferences';
import Subscriptions from './sections/Subscription';

export type ActiveSection = 'perfil' | 'preferencias' | 'suscripcion' | 'notificaciones' | 'email' | 'password';

interface SectionProps {
  activeSection: ActiveSection;
}

const Section: React.FC<SectionProps> = ({ activeSection }) => {
  switch (activeSection) {
    case 'perfil':
      return <div><Profile /></div>;
    case 'preferencias':
      return <div><Preferences /></div>;
    case 'suscripcion':
      return <div><Subscriptions /></div>;
    case 'notificaciones':
      return <div><Notifications /></div>;
    case 'email':
      return <div><Email /></div>;
    case 'password':
      return <div><Password /></div>;
    default:
      return null;
  }
};

export default Section;