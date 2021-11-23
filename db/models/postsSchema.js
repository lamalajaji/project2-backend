const mongoose = require("mongoose");

//// this is a Schema for posts
const postsSchema = new mongoose.Schema({
  post: [
    {
      artical: String,
      image1: { type: String },
      image2: { type: String },
      image3: { type: String },
      video: {type: String},
      created: { type: Date, default: Date.now },
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
    },
  ],
  comments: [
    {
      comment: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});



// artical: { type: String, required: true },
//   photo: { type: String },
//   secPhoto: { type: String },
//   video: { type: String },
//   date: { type: Date, default: Date.now },
//   writer: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },



module.exports = mongoose.model("Post", postsSchema);