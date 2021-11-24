const express = require("express");
const {
  newPost,
  getPosts,
  deletePost,
  addComments,
  allComments,
  newDesigner,
  getdesigners
} = require("./../controllers/posts");
const postsRouter = express.Router();

postsRouter.post("/post", newPost);
postsRouter.get("/posts", getPosts);
// postsRouter.put("/:postid", editPost);
postsRouter.delete("/:postid", deletePost);
postsRouter.post("/addcomment/:id", addComments);
postsRouter.get("/allcomments", allComments);
postsRouter.post("/designer", newDesigner);
postsRouter.get("/designers", getdesigners);



module.exports = postsRouter;
