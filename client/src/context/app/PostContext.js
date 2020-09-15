import React, { useContext, createContext, useReducer } from 'react';
import { POST_STATE } from '../initialState';
import postReducer from '../reducers/posts';

export const PostContext = createContext(null);
export const PostConsumer = PostContext.Consumer;

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, POST_STATE);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
export default PostProvider;
