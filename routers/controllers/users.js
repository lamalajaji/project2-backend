const userModel = require("./../../db/models/userSchema");

////// Regester function => create a new user account
const registerFunction = (req, res) => {
  //// But first it will check if the Email already exists or not
  userModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
    if (user) {
      return res.status(404).send({ email: " This Email has been taken! " });
      //// de not case :
    } else {
      const newUser = new userModel({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json(newUser);
    }
  });
};

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
