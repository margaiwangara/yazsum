const Post = require('../models/Post');

// get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

// get single post
// /api/posts/:id
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
    console.log(error); // hata gostermek icin
  }
};

// create post
exports.createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    return res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

// update post
// api/posts/:id PUT
exports.updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: false,
    });

    return res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

// delete post
// api/posts/:id
exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
