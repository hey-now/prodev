import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function UpdateProjectPage({ projects, handleUpdateProject }) {
    const {id} = useParams();
    let updateProject = projects.find(project => project._id === id);
    const [updatedProject, setUpdatedProject] = useState(updateProject);
    if (!updateProject) return null;

    function handleChange(evt) {
        const updatedProjectForm = {...updateProject, [evt.target.name]: evt.target.value};
        setUpdatedProject(updatedProjectForm);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdateProject(updatedProject, id);
    }

    return (
        <>
        <h1>Edit Project Form</h1>
        <form className='m-10' onSubmit={handleSubmit}>
            <label> Project Title</label>
            <input
            name='projectTitle' 
            value={updatedProject.projectTitle}
            onChange={handleChange}
            type="text" 
            className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            />
            <label> Description</label>
            <textarea 
            name='description'
            value={updatedProject.description}
            onChange={handleChange}
            type="text" 
            placeholder='Enter Description'
            className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            >
            </textarea>
            <label> Project Owner</label>
            <input
            name='projectOwner' 
            value={updatedProject.projectOwner}
            onChange={handleChange}
            type="text" 
            placeholder='Enter Name Here'
            className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            />
            <label>Status</label>
            <select 
            name="projectStatus" 
            value={updatedProject.projectStatus}
            onChange={handleChange}
            id="status"
            className='block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md sm:text-sm'
            >
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Stuck">Stuck</option>
                <option value="Complete">Complete</option>
            </select>
            <label className=''>Start Date:</label>
            <input
            name='projectStartDate' 
            value={updatedProject.projectStartDate}
            onChange={handleChange}
            type="date" 
            placeholder='Enter Start Date Here'
            className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            />
            <label className='pr-10'>End Date:</label>
            <input
            name='projectEndDate' 
            value={updatedProject.projectEndDate}
            onChange={handleChange}
            type="date" 
            placeholder='Enter End Date Here'
            className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            />
            <button type="submit">Update</button>
        </form>
        </>
    );
}