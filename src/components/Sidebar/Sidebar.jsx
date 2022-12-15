import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { SlLogout } from 'react-icons/sl'
import * as userService from '../../utilities/users-service';

export default function Sidebar({ user, setUser, activeMenu, setActiveMenu }) {
    const activeLink = 'flex items-center gap-5 pl4 pt-3 pb-2.5 rounded-lg text-slate-900 text-md m-2 bg:black';
    const normalLink = 'flex items-center gap-5 pl4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-sky-200 m-2';

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return(
        <div className='ml-3 hscreen md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                <div className='flex justify-between items-center'>
                    <Link 
                        to='/' 
                        onClick={() => {}} 
                        className='items-center gap-20 ml-3 
                        mt-4 flex text-xl font-extrabold 
                        tracking-tight dark:text-white 
                        text-slate-900'>
                            <span>Logo</span>
                    </Link>
                    <button 
                        type='button'
                        onClick={() => setActiveMenu(false)}
                        className='text-xl rounded-full p-1 hover:bg-sky-200
                        mt-2 ml-20 block text-slate-900'><MdOutlineCancel />
                    </button>
                </div>
                <p className='text-xl'>Welcome, {user.name}</p>
                <Link to="" onClick={handleLogOut}>
                    <div className=''>
                        <button className='hover:bg-sky-200'>LogOut</button>
                    </div>
                </Link>
                <div className='mt-20'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Home
                    </NavLink>
                    <hr />
                    <br />
                    <NavLink to={'/new'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Create New Project
                    </NavLink>
                    <hr />
                    <br />
                    <NavLink to={'/orders'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Projects
                    </NavLink>
                </div>
                </>
            )}

        </div>
    );
}