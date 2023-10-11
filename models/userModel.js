const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Agrega este campo para almacenar el token JWT
//   jwtToken: String, 
});
// UserModel.js
// userSchema.methods.isValidPassword = function (password) {
//   return password === this.password;
// };

const User = mongoose.model('User', userSchema);

module.exports = User;


