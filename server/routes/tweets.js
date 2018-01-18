const express = require('express');
const router = express.Router();
const Tweet = require('../controllers/tweetControllers');
const Auth = require('../middleware/auth')
/* GET users listing. */
router.post('/tweet', Auth.isLogin, Tweet.createTweet);
router.post('/remove/:id', Auth.isLogin, Tweet.removeTweet);

module.exports = router;
