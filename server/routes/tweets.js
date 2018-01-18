const express = require('express');
const router = express.Router();
const Tweet = require('../controllers/tweetControllers');
const Auth = require('../middleware/auth')
/* GET users listing. */
router.get('/all', Tweet.allTweet);
router.get('/alluser', Auth.isLogin, Tweet.allTweetuser);
router.post('/tweet', Auth.isLogin, Tweet.createTweet);
router.delete('/remove/:id', Auth.isLogin, Tweet.removeTweet);

module.exports = router;
