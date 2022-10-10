const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/', usersController.index)
router.post('/', usersController.create)
router.post('/login', usersController.showByUsername)

module.exports = router;
