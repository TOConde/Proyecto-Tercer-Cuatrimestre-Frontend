import { Button } from 'react-bootstrap';
import './LogOut.css'

export const LogOutButton = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = ''
  }

  return (
    <div className='logOutBttnContainer'>
      <Button className='logOutBttn' onClick={handleLogOut}>LogOut</Button>
    </div>
  );
}