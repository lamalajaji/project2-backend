const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



///establish connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const DB = process.env.DB;


mongoose.connect(DB, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);

