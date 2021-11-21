const express = require("express");
const {
  registerFunction,
  getAllUsers,
  loginFunction,
} = require("./../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/register", registerFunction);
usersRouter.post("/login", loginFunction);

usersRouter.get("/allusers", getAllUsers);

module.exports = usersRouter;
