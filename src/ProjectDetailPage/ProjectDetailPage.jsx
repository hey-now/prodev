import { useParams } from "react-router-dom";

export default function ProjectDetailPage({ projects }) {
    let { id } = useParams();

    let project = projects.find((p) => p._id === id);

    return(
        <>
        <h1>{project.projectTitle} Detail</h1>
        <br />
        <hr />
        <br />
        <div>Created on {new Date(project.createdAt).toLocaleDateString()}</div>
        <div>Last Update on {new Date(project.updatedAt).toLocaleDateString()}</div>
        <br />
        <hr />
        <br />
        <div>Description: {project.description}</div>
        <br />
        <div>Owner: {project.projectOwner}</div>
        <br />
        <div>Project Status: {project.projectStatus}</div>
        <br />
        <div>Start Date: {project.projectStartDate}</div>
        <br />
        <div>End Date: {project.projectEndDate}</div>
        <br />
        </>
    );
}