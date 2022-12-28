import { useParams } from "react-router-dom";

export default function ProjectDetailPage({ projects }) {
    let { id } = useParams();

    let project = projects.find((p) => p._id === id);

    return(
        <h1>{project.projectTitle} Detail</h1>
    );
}