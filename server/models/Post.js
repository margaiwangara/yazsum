const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    minlength: [10, 'Title length must be greater than 10'],
    maxlength: [200, 'Title length must be less than 200'],
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Description is required'],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;
