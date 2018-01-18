const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  post: String,
  date: {
    type: Date,
    default: new Date()
  },
  hastag: [],
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet
