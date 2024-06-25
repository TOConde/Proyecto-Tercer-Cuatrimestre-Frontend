export type ActiveSection = 'profile' | 'account' | 'notifications' | 'privacy' | 'email' | 'password';

interface SectionProps {
  activeSection: ActiveSection;
}

const Section: React.FC<SectionProps> = ({ activeSection }) => {
  switch (activeSection) {
    case 'profile':
      return <div>Profile</div>;
    case 'account':
      return <div>Account</div>;
    case 'notifications':
      return <div>Notification</div>;
    case 'privacy':
      return <div>Privacy</div>;
    case 'email':
      return <div>Email</div>;
    case 'password':
      return <div>Password</div>;
    default:
      return null;
  }
};

export default Section;