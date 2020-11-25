var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
  {
    email:{type: String, unique: true, required : true, lowercase : true},
    password: {type: String, required : true},
    name: {type: String, required : true},
    date: {type: Date, required : true},
  }
);

const User = mongoose.model('user', userSchema);
module.exports = User;