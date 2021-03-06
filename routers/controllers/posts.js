const postModel = require("./../../db/models/postsSchema");
// const commentSchema = require("./../../db/models/comments");
const designerSchema = require("./../../db/models/designersSchema");
const projectsModel = require("./../../db/models/projectSchema");

////// create a new post function (post)
const newPost = async (req, res) => {
  try {
    const title = req.body.title;
    const post = req.body.post;
    const createdBy = req.body.createdBy;
    const media = req.body.media;

    const Post = await new postModel({
      title: title,
      post: post,
      createdBy: createdBy,
      media: media,
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
      .populate("createdBy")
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.json({ error });
  }
};
/////// get post 
const getPost = async (req, res) => {
  const {id} = req.params;
  const post = await postModel.findOne({ _id: id }).then((result) => {
    res.status(200).json(result);
  });
};

///// add designers function

const newDesigner = async (req, res) => {
  try {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const password = req.body.password;
    const profilePic = req.body.profilePic;

    const Post = await new designerSchema({
      userName: userName,
      userEmail: userEmail,
      password: password,
      profilePic: profilePic,
    });
    await Post.save();
    res.status(200).json({ message: "designer has been added " });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

////// get All designers
const getdesigners = async (req, res) => {
  try {
    designerSchema.find({}).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.json({ error });
  }
};

///// add comments function
const addComments = async (req, res) => {
  const comment = req.body.comment;
  const id = req.body.id;
  const postId = req.body.postId;
  const newComment = { comment: comment, postId: postId, postedBy: id };
  postModel
    .findOneAndUpdate(
      { _id: postId },
      { $push: { comments: newComment } },
      { new: true }
    )
    .exec()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

////// get all comments
const allComments = (req, res) => {
  try {
    commentSchema.find({}).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.json({ error });
  }
};

////// git comment By postId
const findComments = async (req, res) => {
  const postId = req.body.postId;
  const comment = await postModel
    .findOne({ _id: postId })
    .then((result) => {
      res.status(200).json(result.comments);
    });
};



/////// add project function
const newProject = async (req, res) => {
  try {
    const createdBy = req.body.createdBy;
    const media = req.body.media;

    const Project = await new projectsModel({
      createdBy: createdBy,
      media: media,
    });
    await Project.save();
    res.status(200).json({ message: "Project has been added " });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//////// get all projects function

const getProjects = async (req, res) => {
  try {
    projectsModel
      .find({})
      .populate("createdBy")
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.json({ error });
  }
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
  getPost,
  deletePost,
  addComments,
  allComments,
  newProject,
  getProjects,
  newDesigner,
  getdesigners,
  findComments,
};
