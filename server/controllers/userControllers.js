const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config()


let signUp = (req, res) => {
  const newUser = new User(req.body)
  newUser.save()
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

let signIn = (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then((result) => {
      if (!result) {
        res.status(403).json({
          msg: 'Maaf User Tidak Ada',
          login: false
        })
      } else if (!bcrypt.compareSync(req.body.password, result.password)) {
        res.status(403).json({
          msg: 'Maaf Password Anda Salah',
          login: false
        })
      } else {
        jwt.sign({
          id: result._id,
          email: result.email,
          name: result.name
        }, process.env.RAHASIA, (err, token) => {
          res.status(200).json({
            msg: 'Login Sukses',
            data: token
          })
        });
      }

    })
    .catch((err) => {
      res.status(500).json(err);
    })
}

let editUser = (req, res) => {

  let updateUser = {
    first_name : req.body.first_name,
    last_name : req.body.last_name
  }

  User.update({
    _id: req.getUser.id
  }, updateUser)
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

module.exports = {
  signIn,
  signUp,
  editUser
}