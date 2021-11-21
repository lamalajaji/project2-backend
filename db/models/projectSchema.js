const mongoose = require("mongoose");



/// this is the Schema for designers projects

const projectsSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});


module.exports = mongoose.model("Project", projectsSchema);