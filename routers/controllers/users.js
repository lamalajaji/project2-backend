// const { brotliCompressSync } = require("zlib");
const userModel = require("./../../db/models/userSchema");
const bcrypt = require("bcryptjs")
////// Regester function => create a new user account
const registerFunction = async (req, res) => {
  try {
    const {userName , userEmail , password} = req.body

    if (!userName || !userEmail || !password){
      return res.status(404).send(" You Must Enter all Fields !")
    }
    if (password.length <8){
      res.status(400).send(" the password must be at least 8 characters !")
    }
    const existingEmail = await userModel.findOne({userEmail : userEmail })
    if (existingEmail){
      res.status(404).send({ email: " This Email has been taken! "})

    }
  const salt = await bcrypt.gensalt();
  const hashingPassword = await bcrypt.hash(password , salt);
  } 
  catch(err){
    res.status(500).json({err: err.message})
  }
}
  //// But first it will check if the Email already exists or not
  // userModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
  //   if (user) {
  //     return res.status(404).send({ email: " This Email has been taken! " });
      
  //     //// de not case :
  //   } else {
  //     const newUser = new userModel({
  //       userName: req.body.userName,
  //       userEmail: req.body.userEmail,
  //       password: req.body.password,
  //     });
  //     newUser.save();
  //     return res.status(200).json(newUser);
  //   }
  // });


///// a functon to get all users
/// i create this function just to check if my functions are doing well or nah hehe
const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { registerFunction, getAllUsers };
