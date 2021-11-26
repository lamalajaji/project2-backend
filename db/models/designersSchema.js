const mongoose = require("mongoose");




////// this schema for Designers 
const designerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 8 },
  phoneNumber: {type: String, required: true,  length: 10 },
  profilePic: { type: String },
 
});




module.exports = mongoose.model("Designer", designerSchema);