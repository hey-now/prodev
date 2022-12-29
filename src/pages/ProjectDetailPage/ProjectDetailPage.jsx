import { useParams, useNavigate } from "react-router-dom";
import UpdateProjectPage from "../UpdateProjectPage/UpdateProjectPage";

export default function ProjectDetailPage({ projects }) {
    let { id } = useParams();
    let project = projects.find((p) => p._id === id);
    const navigate = useNavigate();

    return(
        <>
        <h1><span className="text-lg">{project.projectTitle}</span> Detail</h1>
        <br />
        <hr />
        <br />
        <div>Created on {new Date(project.createdAt).toLocaleDateString()}</div>
        <div>Last Update on {new Date(project.updatedAt).toLocaleDateString()}</div>
        <br />
        <hr />
        <br />
        <button onClick={() => navigate(`/projects/${project._id}/update`)}>Update</button>
        <br />
        <hr />
        <br />
        <div>Description: {project.description}</div>
        <br />
        <div>Owner: {project.projectOwner}</div>
        <br />
        <div>Project Status: {project.projectStatus}</div>
        <br />
        <div>Start Date: {new Date(project.projectStartDate).toLocaleDateString()}</div>
        <br />
        <div>End Date: {new Date(project.projectEndDate).toLocaleDateString()}</div>
        <br />
        </>
    );
}