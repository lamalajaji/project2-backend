const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db/db.js");
const usersRouter = require("./routers/routes/users");
const designerRouter = require("./routers/routes/users");
const postsRouter = require("./routers/routes/posts");
const morgan = require("morgan");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

///middlewares
////app level middleware
app.use(express.json());
///// cors middleWare
app.use(cors());
////morgan
app.use(morgan("dev"));
//// Routers middleware
app.use("/users", usersRouter);
app.use("/designer", designerRouter);
//// posts middleare
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server Is Started on ${PORT}`);
});
