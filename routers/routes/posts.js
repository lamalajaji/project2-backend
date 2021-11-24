const express = require("express");
const { newPost, getPosts, deletePost } = require("./../controllers/posts");
const postsRouter = express.Router();

postsRouter.post("/post", newPost);
postsRouter.get("/posts", getPosts);
// postsRouter.put("/:postid", editPost);
postsRouter.delete("/:postid", deletePost);

module.exports = postsRouter;
