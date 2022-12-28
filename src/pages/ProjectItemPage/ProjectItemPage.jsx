import { Link } from 'react-router-dom'

export default function ProjectItemPage({ projects, handleDelete }) {
    return (
        <>
            { projects.length ?
            projects.map((p, idx) =>
                    <div className="" key={idx}>
                        <Link to={`/projects/${p._id}`}><span>{p.projectTitle}</span></Link>
                    </div>)         
            :
            <h3>Add A Project, Developer!</h3>
            }
        </>
    );
  }