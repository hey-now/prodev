import { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function NewProjectPage( { addProject } ) {
  const [formData, setFormData] = useState('');

  function submitAddProject(evt) {
    evt.preventDefault();
    addProject(formData);
    setFormData({})
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
    <h1>Create A New Project</h1>
    <br />
    <form className='m-10' onSubmit={submitAddProject}>
      <label> Project Title</label>
      <input
      name='projectTitle' 
      value={formData.projectTitle}
      onChange={handleChange}
      type="text" 
      placeholder='Enter New Project Title'
      className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
      <label> Description</label>
      <textarea 
      name='description'
      value={formData.description}
      onChange={handleChange}
      type="text" 
      placeholder='Enter Description'
      className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      >
      </textarea>
      <label> Project Owner</label>
      <input
      name='projectOwner' 
      value={formData.projectOwner}
      onChange={handleChange}
      type="text" 
      placeholder='Enter Name Here'
      className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
      <label>Status</label>
      <select 
      name="projectStatus" 
      value={formData.projectStatus}
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
      value={formData.projectStartDate}
      onChange={handleChange}
      type="date" 
      placeholder='Enter Start Date Here'
      className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
      <label className='pr-10'>End Date:</label>
      <input
      name='projectEndDate' 
      value={formData.projectEndDate}
      onChange={handleChange}
      type="date" 
      placeholder='Enter End Date Here'
      className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
        <button type='submit' className='hover:bg-sky-200'>Create Project</button>
    </form>
  </>
  );
}