const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  img5: { type: String },
  vedio: { type: String },
});



module.exports = mongoose.model("Media", mediaSchema);
