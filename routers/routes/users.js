const express = require("express");
const { registerFunction, getAllUsers } = require("./../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/register", registerFunction);
usersRouter.get("/allusers", getAllUsers);

module.exports = usersRouter;
