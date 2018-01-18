const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  foto: String
});

userSchema.pre('save', function(next) {

  if (this.isModified('password') || this.isNew) {
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
  } else {
    next()
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;