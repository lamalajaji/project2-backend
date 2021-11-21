const designerModel = require("./../../db/models/designersSchema");



//// create a designer account function => new designer
const createDesignerAccFunc = (req, res) => {
  const { userName, userEmail, password, profilePic } = req.body;

  const newDesigner = new designerModel({
    userName,
    userEmail,
    password,
    profilePic,
  });
    console.log(newDesigner );

  newDesigner
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


module.exports = { createDesignerAccFunc };
