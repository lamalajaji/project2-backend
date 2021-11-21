const express = require("express");
const { createAccFunc, getAllUsers } = require("./../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/newaccount", createAccFunc);
usersRouter.get("/users", getAllUsers);

module.exports = usersRouter;
