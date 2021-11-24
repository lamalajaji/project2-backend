const mongoose = require("mongoose");

const projectComment = new mongoose.Schema({
  comments: [
    {
      comment: { type: String },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      postedAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("projectComment", projectComment);
