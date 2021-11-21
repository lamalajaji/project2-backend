const mongoose = require("mongoose");

//// this is a Schema for posts
const postsSchema = new mongoose.Schema({
  artical: { type: String, required: true },
  photos : { type: String},

  // writer : {}
});







module.exports = mongoose.model("Post", postsSchema);