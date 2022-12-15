import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, activeMenu, setActiveMenu }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <button className='hover:bg-sky-200' onClick={() => setActiveMenu(true)}><AiOutlineMenu /></button>
    </div>
  );
}