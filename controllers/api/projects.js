const Project = require('../../models/project');

module.exports = {
    index,
    // updateProject,
    show,
    create,
    // delete: deleteProject
};

async function index(req, res) {
    const projects = await Project.find({user: req.user._id});
    // re-sort based upon the sortOrder of the populated categories
    res.json(projects);
  }

// async function updateNote(req, res) {
//   try {
//     await Note.findByIdAndUpdate(
//       {_id: req.params.id}, req.body
//       )
//     const note = await Note.find({user: req.user._id})
//     res.json(note);
//   } catch (err) { 
//     return next(err);
//   }
// }
  
  async function show(req, res) {
    const note = await Note.findById(req.params.id);
    res.json(note);
  }

  async function create(req, res) {
    req.body.user = req.user._id;
    const project = await Project.create(req.body);
    res.json(project);
  }
  
//   async function deleteNote(req, res) {
//     req.body.user = req.user._id;
//     const note = await Note.findByIdAndDelete(req.params.id);
//     res.json(note);
//   }