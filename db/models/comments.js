const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: String,
  postedAt: { type: Date, default: Date.now },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});




module.exports = mongoose.model("Comment", commentSchema);
