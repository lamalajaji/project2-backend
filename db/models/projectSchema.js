const mongoose = require("mongoose");



/// this is the Schema for designers projects

const projectsSchema = new mongoose.Schema({
  project: [
    {
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Designer" },
      createdAt: { type: Date, default: Date.now },
      
      
    },
  ],
});


module.exports = mongoose.model("Project", projectsSchema);
