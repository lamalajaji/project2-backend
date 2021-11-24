const postModel = require("./../../db/models/postsSchema");

////// create a new post function (post)
const newPost = async (req, res) => {
  try {
    const { artical } = req.body;

    const Post = await new postModel({
      artical: artical
    });
    await Post.save();
    res.status(200).json({ message: "Post has been added " });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//////// get All posts function

const getPosts = async (req, res) => {
  try {
    postModel
      .find({})
      .populate("Comments.postedBy")
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.json({ error });
  }
};

///// posts comments function
const addComments = (req, res) => {
  const comment = {
    comment: req.body.comment,
    by: req.body.postedBy,
  };
  postModel
    .findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
    .populate("comments.postedBy")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

///// delete specific post function
const deletePost = async (req, res) => {
  const { id } = req.params;

  postModel
    .findOneAndDelete({ _id: id })
    .then(() => {
      res.status(200).json({ message: "Post has been deleted" });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  newPost,
  getPosts,
  addComments,
  deletePost,
};
