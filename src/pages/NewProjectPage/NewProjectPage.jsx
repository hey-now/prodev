import { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function NewProjectPage( { addProject } ) {
  const [formData, setFormData] = useState('');
  const [projectStartDate, setProjectStartDate] = useState (new Date());
  const [projectEndDate, setProjectEndDate] = useState (new Date());

  function submitAddNote(evt) {
    evt.preventDefault();
    addProject(formData);
    setFormData('')
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
    <h1>Create A New Project</h1>
    <br />
    <form className='m-10'>
      <label> Project Title</label>
      <input 
      type="text" 
      placeholder='Enter New Project Title'
      className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
      <label> Description</label>
      <textarea 
      type="text" 
      placeholder='Enter Description'
      className='placeholder:italic block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      >
      </textarea>
      <label> Project Owner</label>
      <input 
      type="text" 
      placeholder='Enter Name Here'
      className='placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      />
      <label>Status</label>
      <select 
      name="status" 
      id="status"
      className='block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md sm:text-sm'
      >
        <option value="Planning">Planning</option>
        <option value="In Progress">In Progress</option>
        <option value="Stuck">Stuck</option>
        <option value="Complete">Complete</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <div className='flex'>
      <label className='pr-10'>Start Date:</label>
        <DatePicker 
          className=' mt-10 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md sm:text-sm' 
          selected={projectStartDate} 
          onChange={(date:Date) => setProjectStartDate(date)} />
        <label className='pr-10'>End Date:</label>
        <DatePicker 
          className='mt-10 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md sm:text-sm' 
          selected={projectEndDate} 
          onChange={(date:Date) => setProjectEndDate(date)} />
      </div>
        <button className='hover:bg-sky-200'>Create Project</button>
    </form>
  </>
  );
}