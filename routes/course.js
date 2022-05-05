const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course');

router.get('/:courseName', courseController.getCourse);

module.exports = router;