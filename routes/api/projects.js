const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/projects
router.get('/', projectsCtrl.index);
// GET /api/projects/:id
// router.get('/:id', ensureLoggedIn, projectsCtrl.show);
// PUT /api/projects/update/:id
// router.put('/update/:id', ensureLoggedIn, projectsCtrl.updateNote);
// POST /api/projects
router.post('/', ensureLoggedIn, projectsCtrl.create);
// DELETE /api/projects/:id
// router.delete('/:id', ensureLoggedIn, projectsCtrl.delete);

module.exports = router;