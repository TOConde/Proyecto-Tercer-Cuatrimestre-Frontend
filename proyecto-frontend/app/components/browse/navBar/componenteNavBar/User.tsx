import './User.css'
import { FaUser } from "react-icons/fa";

export const NavBarUser = () => {
  return (
    <div className='containerUser'>
      <a href="http://localhost:3000/profile">
        <FaUser className='userImg'/>
      </a>      
    </div>
  );
}