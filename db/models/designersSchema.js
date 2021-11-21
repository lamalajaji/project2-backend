const mongoose = require("mongoose");




////// this schema for Designers 
const designerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 8 },
  profilePic: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});




module.exports = mongoose.model("Designer", designerSchema);