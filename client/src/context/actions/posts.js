import axios from 'axios';
import {
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  UPDATE_POST,
} from '../actionTypes';

export const BASE_URL = 'http://localhost:5000';

export const getPostsAction = (posts) => ({
  type: GET_POSTS,
  posts,
});

export const createPostAction = (post) => ({
  type: CREATE_POST,
  post,
});

export const updatePostAction = (post) => ({
  type: UPDATE_POST,
  post,
});

export const deletePostAction = (id) => ({
  type: DELETE_POST,
  id,
});

export const getPostAction = (post) => ({
  type: GET_POST,
  post,
});

function getPosts(dispatch) {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${BASE_URL}/api/posts`)
      .then((res) => {
        dispatch(getPostsAction(res.data.data));
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject(error.response.data.error);
      });
  });
}

function getPost(dispatch, id) {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${BASE_URL}/api/posts/${id}`)
      .then((resp) => {
        dispatch(getPostAction(resp.data.data));
        resolve();
      })
      .catch((error) => {
        console.log('Get Post Error', error);
        reject(error.response.data.error);
      });
  });
}
function createPost(dispatch, formData) {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${BASE_URL}/api/posts`, formData)
      .then((resp) => {
        dispatch(createPostAction(resp.data.data));
        resolve();
      })
      .catch((error) => {
        console.log('Creation Error', error);
        reject(error.response.data.error);
      });
  });
}

function updatePost(dispatch, formData, id) {
  return new Promise((resolve, reject) => {
    return axios
      .put(`${BASE_URL}/api/posts/${id}`, formData)
      .then((resp) => {
        dispatch(updatePostAction(resp.data.data));
        resolve();
      })
      .catch((error) => {
        console.log('Update Error', error);
        reject(error.response.data.error);
      });
  });
}

function deletePost(dispatch, id) {
  return new Promise((resolve, reject) => {
    return axios
      .delete(`${BASE_URL}/api/posts/${id}`)
      .then((resp) => {
        dispatch(deletePostAction(id));
        resolve();
      })
      .catch((error) => {
        console.log('Delete Error', error);
        reject(error.response.data.error);
      });
  });
}
export { getPosts, createPost, updatePost, deletePost, getPost };
