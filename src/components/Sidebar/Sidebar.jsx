import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { getUser } from '../../utilities/users-service';
import { useEffect, useState } from 'react';
import * as userService from '../../utilities/users-service';
import * as projectsAPI from '../../utilities/projects-api';
import ProjectItemPage from '../../pages/ProjectItemPage/ProjectItemPage';

export default function Sidebar({activeMenu, setActiveMenu}) {
    const activeLink = 'flex items-center gap-5 ml-5 pl4 pt-3 pb-2.5 rounded-lg text-slate-900 text-md m-2 bg:black';
    const normalLink = 'flex items-center gap-5 ml-5 pl4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-sky-200 m-2';
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState(getUser());

    useEffect(function() {
        async function getProjects() {
          const allProjects = await projectsAPI.getAll();
          setProjects(allProjects);
        }
        getProjects();
      }, []);

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return(
        <div className='ml-3 hscreen md:overflow-hidden overflow-auto flex-grow-0
        md:hover:overflow-auto pb-10 shadow-2xl h-full'>
            {activeMenu && (
                <>
                <div className='flex justify-between items-center overflow-auto'>
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
                    <div className=''>
                        <button onClick={handleLogOut} className='hover:bg-sky-200'>LogOut</button>
                    </div>
                <div className='mt-20'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Home
                    </NavLink>
                    <hr />
                    <br />
                    <NavLink to={'/projects/new'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Create New Project <span className='text-xl'><AiOutlineFileAdd /></span> 
                    </NavLink>
                    <hr />
                    <br />
                    <NavLink to={'/projects'} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Projects
                    </NavLink>
                    <div>
                    <div><ProjectItemPage projects={projects} /></div>
                    </div>
                    <hr />
                    <br />  
                </div>
                </>
            )}
        </div>
    );
}