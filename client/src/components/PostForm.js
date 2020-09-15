import React, { useState, useEffect } from 'react';
import { usePost } from '../context/app/PostContext';
import { createPost, updatePost, getPost } from '../context/actions/posts';
import { useParams, useHistory } from 'react-router-dom';

function PostForm({ page, pageTitle, btnText }) {
  const { state, dispatch } = usePost();
  const { id } = useParams();
  const history = useHistory();
  const [value, setValue] = useState({
    title: '',
    description: '',
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (page === 'edit') {
      setIsLoading(true);
      getPost(dispatch, id)
        .then(() => {
          setIsLoading(false);
          setValue({
            title: state.post.title ? state.post.title : '',
            description: state.post.description ? state.post.description : '',
          });

          console.log('Post Acquired');
        })
        .catch(() => console.log('Post Not Acquired'));
    }
  }, [state.post.title, state.post.description]);

  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (page === 'create') {
      createPost(dispatch, value)
        .then(() => {
          console.log('Post Created');
          history.push('/');
        })
        .catch((error) => {
          setErrors(error.message);
          console.log('Post Not Created');
        });
    } else {
      updatePost(dispatch, value, id)
        .then(() => {
          console.log('Post Updated');
          history.push('/');
        })
        .catch((error) => {
          setErrors(error.message);
          console.log('Post Not Updated');
        });
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>{pageTitle}</h3>
                <hr />
                {errors.length > 0 ? (
                  <div className="alert alert-danger">{errors}</div>
                ) : (
                  ''
                )}
                <div className="form-group">
                  <label htmlFor="titleField">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="titleField"
                    onChange={handleChange}
                    value={value.title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descriptionField">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="10"
                    id="descriptionField"
                    onChange={handleChange}
                    value={value.description}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  {btnText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
