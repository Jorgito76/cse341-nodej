const routes = require('express').Router();
const course = require('../controllers/course.js');
const validation = require('../middleware/validate');

routes.get('/', course.findAll);

routes.post('/', validation.saveCourse, course.create);

routes.put('/:id', validation.saveCourse, course.update);

routes.delete('/:id', course.delete);

module.exports = routes;