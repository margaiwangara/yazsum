import {
  CREATE_POST,
  DELETE_POST,
  GET_POSTS,
  UPDATE_POST,
  GET_POST,
} from '../actionTypes';

function postReducer(state, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case GET_POST:
      return {
        ...state,
        post: action.post,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case UPDATE_POST:
      // filter first
      const filteredPost = state.posts.filter(
        (value) => value._id !== action.post._id,
      );
      return {
        ...state,
        post: action.post,
        posts: [...filteredPost, action.post],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((value) => value._id !== action.id),
      };
    default:
      return state;
  }
}

export default postReducer;
