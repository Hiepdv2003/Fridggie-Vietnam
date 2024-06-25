const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/', userController.getAllUsers);
router.post('/add', userController.createUser);

module.exports = router;
