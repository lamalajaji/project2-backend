const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db/db.js");
const usersRouter = require("./routers/routes/users");
const designerRouter = require("./routers/routes/users");


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

///middlewares
////app level middleware
app.use(express.json());
///// cors middleWare
app.use(cors());
//// Routers middleware
app.use("/users", usersRouter);
app.use("/designer", designerRouter);






app.listen(PORT, () => {
  console.log(`Server Is Started on ${PORT}`);
});
