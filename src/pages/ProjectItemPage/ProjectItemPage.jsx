import { useNavigate } from 'react-router-dom'

export default function ProjectItemPage({ projects, handleDelete }) {
    const navigate = useNavigate();
    return (
        <>
        { projects.length ?
        projects.map((p, idx) => 
            <div className="" key={idx}>
                <span>{p.title}</span>
                {/* <button onClick={() => handleDelete(n._id)}>Delete</button>
                <button onClick={() => navigate(`/notes/${n._id}/update`)}>Update</button> */}
            </div>)         
        :
        <h3>Add A Project, Developer!</h3>
        }
        </>
    );
  }