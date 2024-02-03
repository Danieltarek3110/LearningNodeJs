const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');

router.post('/register' , UserController.post_register);
router.get('/register' , UserController.get_register  )
router.post('/authenticate' , UserController.login);

module.exports = router;
