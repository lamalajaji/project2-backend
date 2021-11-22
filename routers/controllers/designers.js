const designerModel = require("./../../db/models/designersSchema");
const bcrypt = require("bcrypt");



////// Regester function => create a new user account
const createDesignerAccFunc = async (req, res) => {
  try {
    const { userName, userEmail, password, profilePic } = req.body;
    // console.log(userName, userEmail, password);
    //// to fill all user requests
    if (!userName || !userEmail || !password) {
      return res.status(400).json(" You Must Enter all Fields !");
    }
    ///checking if password length >= 8
    if (password.length < 8) {
      res.status(400).json(" the password must be at least 8 characters !");
    }
    /// this will check if the Email already exist or not
    const existingEmail = await designerModel.findOne({ userEmail: userEmail });
    if (existingEmail) {
      res.status(404).json({ email: " This Email has been taken! " });
    }
    // const salt = await bcrypt.genSalt(10);
    // const hashingPassword = await bcrypt.hash(password , salt);
    const newDesigner = new designerModel({
      userName: userName,
      userEmail: userEmail,
      password: password,
    });
    newDesigner.save();
    return res.status(200).json(newDesigner);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};



////// login function
const designerLogin = async (req, res) => {
  const { userEmail, password } = req.body;

  //// first check the Email
  const user = await designerModel.findOne({ userEmail: userEmail });
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
const updateDesignerInfo = (req, res) => {
  const { userName } = req.body;
  const { userEmail } = req.params;

  designerModel
    .findOneAndUpdate(
      { userName: `${userEmail}` },
      { $set: { userName: userName } },
      { new: true }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err.message));
};



module.exports = { createDesignerAccFunc, designerLogin, updateDesignerInfo };
