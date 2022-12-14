import { useState, useEffect } from 'react';
import * as projectsAPI from '../../utilities/projects-api';
import { getUser } from '../../utilities/users-service';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewProjectPage from '../NewProjectPage/NewProjectPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import UpdateProjectPage from '../UpdateProjectPage/UpdateProjectPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [projects, setProjects] = useState([]);
  const [activeMenu, setActiveMenu] = useState(true)
  const navigate = useNavigate();

  async function addProject(project) {
    const newProject = await projectsAPI.create(project);
    setProjects([...projects, newProject]);
    navigate('/projects');
  }
  async function handleDelete(id) {
    await projectsAPI.deleteProject(id);
    const remainingProjects = projects.filter(project => project._id !== id);
    setProjects(remainingProjects);
    navigate('/projects');
  }
  async function handleUpdateProject(projectFormData, id) {
    const handleUpdatedProject = await projectsAPI.updateProject(id, projectFormData);
    const projects = await projectsAPI.getAll();
    setProjects(projects);
    navigate(`/projects/${id}`);
  }

  useEffect(function() {
    async function getProjects() {
      const allProjects = await projectsAPI.getAll();
      setProjects(allProjects);
    }
    getProjects();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
          {/* Sidebar */}
          {activeMenu ? (
            <div className='w-72 h-full fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar user={user} setUser={setUser} activeMenu={activeMenu} setActiveMenu={setActiveMenu} projects={projects} handleDelete={handleDelete}/>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar user={user} setUser={setUser} activeMenu={activeMenu} setActiveMenu={setActiveMenu} projects={projects} handleDelete={handleDelete}/>
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen bg-fixed w-full ${activeMenu ? 'md:ml-72' : 'flex-2 -mt-10'}`
          }>
            <div className='relative md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <NavBar user={user} setUser={setUser} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <Routes>
              {/* Route components in here */}
              <Route path="/projects/new" element={<NewProjectPage user={user} setUser={setUser } addProject={addProject}/>} />
              <Route path="/projects" element={<ProjectsPage user={user} setUser={setUser} projects={projects}/>} />
              <Route path="/projects/:id" element={<ProjectDetailPage projects={projects} handleDelete={handleDelete}/>} />
              <Route path="/projects/:id/update" element={<UpdateProjectPage handleUpdateProject={handleUpdateProject} projects={projects}/>} />
            </Routes>
              </div>
          </div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
