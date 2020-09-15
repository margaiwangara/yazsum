const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require('../controllers/posts');

// /api/posts/:id /api/posts/
router.route('/').post(createPost).get(getPosts);
router.route('/:id').get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
