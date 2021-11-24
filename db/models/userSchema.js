const mongoose = require("mongoose");




//// this schema for normal user
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 8 },
});






module.exports = mongoose.model("User", userSchema);
