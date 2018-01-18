const express = require('express');
const router = express.Router();
const User = require('../controllers/userControllers');
const Auth =  require('../middleware/auth')

/* GET users listing. */
router.post('/signin', User.signIn);
router.post('/signup', User.signUp);
router.put('/update', Auth.isLogin, User.editUser);

module.exports = router;
