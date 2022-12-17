import ProjectItemPage from '../ProjectItemPage/ProjectItemPage';

export default function ProjectsPage({ user, setUser, projects }) {

  return (
      <>
        <h1>{user.name}'s Projects Page</h1>
        <br />
        <br />
        <div><ProjectItemPage projects={projects} /></div>
      </>
  );
}