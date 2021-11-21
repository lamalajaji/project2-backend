const mongoose = require("mongoose");

//// this is a Schema for posts
const postsSchema = new mongoose.Schema({
  artical: { type: String, required: true },
  photo: { type: String },
  secPhoto: { type: String },
  video: { type: String },
  date: { type: Date, default: Date.now },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
});







module.exports = mongoose.model("Post", postsSchema);