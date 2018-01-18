const Tweet = require('../models/tweetModels');

let createTweet = (req, res) => {

  const get = req.body.post.split(' ')

  const hastag = []

  for(let i=0; i < get.length; i++ ){
    let setData = get[i].split(''); 
    setData.forEach(function(element) {
      if (element == '#'){
        hastag.push(get[i])
      }
    });
  }

  let newTweet = new Tweet({
    post: req.body.post,
    hastag: hastag || [],
    userID: req.getUser.id
  })
  newTweet.save()
  .then((result) => {
    res.status(200).json({
      msg: 'sukses tweet',
      data: result
    })
  })
  .catch(err => res.status(500).json(err))
  
}

let removeTweet = (req, res) => {
  Tweet.remove({
    _id: req.params.id
  })
  .then((result) => {
    res.status(200).json({
      msg: 'remove sukses'
    })
  })
}

// let searchHastag = (req, res)
module.exports = {
  createTweet,
  removeTweet
}