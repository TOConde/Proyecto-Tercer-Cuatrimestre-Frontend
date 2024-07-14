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
      return <Profile />;
    case 'preferencias':
      return <Preferences />;
    case 'suscripcion':
      return <Subscriptions />;
    case 'notificaciones':
      return <Notifications />;
    case 'email':
      return <Email />;
    case 'password':
      return <Password />;
    default:
      return null;
  }
};

export default Section;