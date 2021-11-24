const mongoose = require("mongoose");

//// this is a Schema for posts
const postsSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
  createdAt: { type: Date, default: Date.now },
  artical: { type: String },
  comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
});

module.exports = mongoose.model("Post", postsSchema);
