const express = require('express');
const router = express.Router();
const User = require('../controllers/userControllers');

/* GET users listing. */
router.post('/signin', User.signIn);
router.post('/signup', User.signUp);

module.exports = router;
