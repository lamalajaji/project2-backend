// const { brotliCompressSync } = require("zlib");
const userModel = require("./../../db/models/userSchema");
const bcrypt = require("bcrypt");

////// Regester function => create a new user account
const registerFunction = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;
    console.log(userName, userEmail, password);
    //// to fill all user requests
    if (!userName || !userEmail || !password) {
      return res.status(400).json({message:" You Must Enter all Fields !"});
    }
    ///checking if password length >= 8
    if (password.length < 8) {
      res.status(400).json({message: " the password must be at least 8 characters !"});
    }
    /// this will check if the Email already exist or not
    const existingEmail = await userModel.findOne({ userEmail: userEmail });
    if (existingEmail) {
      res.status(404).json({ message: " This Email has been taken! " });
    }
    // const salt = await bcrypt.genSalt(10);
    // const hashingPassword = await bcrypt.hash(password , salt);
    const newUser = new userModel({
      userName: userName,
      userEmail: userEmail,
      password: password,
    });
    newUser.save();
        return res.status(200).json({massage: "Sign Up Successfully"});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};



////// login function
const loginFunction = async (req, res) => {
  const { userEmail, password } = req.body;

  //// first check the Email
  const user = await userModel.findOne({ userEmail: userEmail });
  if (user) {
    //// then check the password
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      res.status(200).json({ message: "Valid Password" });
    } else {
      res.status(400).json({ error: "Invalid password ! " });
    }
    //// if the Email doesn't exists
  } else {
    res.status(401).json({ error: " User Doesn't Exist! " });
  }
};

////// update the name of user & user's password
const updateUserInfo = async (req, res) => {
  const _id = req.body._id;
  const { userName , password} = req.body;
  
  const user = await userModel.find({ _id: _id });
  const edited = await userModel.findOneAndUpdate({_id: _id },
      {userName: userName ? userName: user.userName ,
      password : password? password: user.password}, {new: true} 
    )
  res.status(200).json(edited);
  
  }

///// delete user account function




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


module.exports = {
  registerFunction,
  getAllUsers,
  loginFunction,
  updateUserInfo,
};
