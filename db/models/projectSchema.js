const mongoose = require("mongoose");



/// this is the Schema for designers projects

const projectsSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
  
  media: [
    {
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
      img5: { type: String },
      vedio: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  comments: [
    {
      comment: { type: String },
      postedAt: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.model("Project", projectsSchema);


