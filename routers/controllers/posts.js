const postModel = require("./../../db/models/postsSchema");
// const commentSchema = require("./../../db/models/comments");
const designerSchema = require("./../../db/models/designersSchema");


////// create a new post function (post)
const newPost = async (req, res) => {
  try {
    const { artical } = req.body;
    const createdBy = req.body.createdBy;

    const Post = await new postModel({
      artical: artical,
      createdBy: createdBy,
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
      .find({}).populate("createdBy")
      .then((result) => {
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
  const newComment = await new commentSchema({
    comment: comment,
    postId: postId,
    postedBy: id
  });
  await newComment.save();
  res.status(200).json("comment has been added !")

};

///// add designers function 

const newDesigner = async (req, res) => {
  try {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
        const password = req.body.password;


    const Post = await new designerSchema({
      userName: userName,
      userEmail: userEmail,
      password: password,
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
    designerSchema
      .find({})
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.json({ error });
  }
};

////// get all comments
const allComments= (req,res)=>{
  try {
    commentSchema
      .find({})
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.json({ error });
  }
}









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
  deletePost,
  addComments,
  allComments,
  newDesigner,
  getdesigners
};
