const mongoose = require("mongoose");

//// this is a Schema for posts
const postsSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
  title: { type: String, required: true },
  media: [
    {
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
      img5: { type: String },
      img6: { type: String },
      img7: { type: String },
      img8: { type: String },
      img9: { type: String },
      vedio: { type: String },
    },
  ],

  createdAt: { type: Date, default: Date.now },
  // artical: { type: String },
  post: [
    {
      part1: { type: String },
      part2: { type: String },
      part3: { type: String },
      part4: { type: String },
      part5: { type: String },
      part6: { type: String },
    },
  ],
  comments: [
    {
      comment: { type: String },
      postedAt: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.model("Post", postsSchema);
