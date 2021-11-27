const express = require("express");
const {
  registerFunction,
  getAllUsers,
  loginFunction,
  updateUserInfo,
} = require("./../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/register", registerFunction);
usersRouter.get("/login", loginFunction);
usersRouter.get("/allusers", getAllUsers);
usersRouter.put("/ediprofile/:id", updateUserInfo);

//// Designers routers
const {
  createDesignerAccFunc,
  designerLogin,
  updateDesignerInfo,
} = require("./../controllers/designers");
const designerRouter = express.Router();
module.exports = usersRouter;

designerRouter.post("/register", createDesignerAccFunc);
designerRouter.get("login", designerLogin);
designerRouter.put("/:userEmail", updateDesignerInfo);
