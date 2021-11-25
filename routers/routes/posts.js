const express = require("express");
const {
  newPost,
  getPosts,
  deletePost,
  addComments,
  allComments,
  findComments,
  newDesigner,
  getdesigners,
  newProject,
  getProjects,
} = require("./../controllers/posts");
const postsRouter = express.Router();

postsRouter.post("/post", newPost);
postsRouter.get("/posts", getPosts);
// postsRouter.put("/:postid", editPost);
postsRouter.delete("/:postid", deletePost);
postsRouter.put("/addcomment", addComments);
postsRouter.get("/allcomments", allComments);
postsRouter.get("/post/comments", findComments);

postsRouter.post("/designer", newDesigner);
postsRouter.get("/designers", getdesigners);
postsRouter.post("/project", newProject);
postsRouter.get("/projects", getProjects);

module.exports = postsRouter;
