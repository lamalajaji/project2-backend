const mongoose = require("mongoose");


const projectMedia = new mongoose.Schema({
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
});




module.exports = mongoose.model("projectMedia", projectMedia);
