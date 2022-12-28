import { useState, useEffect } from 'react';
import * as projectsAPI from '../../utilities/projects-api';
import ProjectItemPage from '../ProjectItemPage/ProjectItemPage';

export default function ProjectsPage({ user, setUser }) {
  const [projects, setProjects] = useState([]);

  useEffect(function() {
    async function getProjects() {
      const allProjects = await projectsAPI.getAll();
      setProjects(allProjects);
    }
    getProjects();
  }, []);

  return (
      <>
        <h1>{user.name}'s Projects Page</h1>
        <br />
        <br />
        <div><ProjectItemPage projects={projects} /></div>
      </>
  );
}