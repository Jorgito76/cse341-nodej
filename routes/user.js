const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:username', usersController.getUser);

router.post('/', usersController.create);

module.exports = router;