const userModel = require("./../../db/models/userSchema");






///// a function to create an account => new user
const createAccFunc = (req, res) => {
  const { userName, userEmail, password, name } = req.body;

  const newUser = new userModel({
    userName,
    userEmail,
    password,
    name,
  });
  console.log(newUser);

  newUser
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

///// a functon to get all users
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

module.exports = { createAccFunc, getAllUsers };
