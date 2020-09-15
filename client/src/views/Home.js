import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePost } from '../context/app/PostContext';
import { getPosts, deletePost } from '../context/actions/posts';

function Home() {
  const { state, dispatch } = usePost();

  const removePost = (id) => {
    deletePost(dispatch, id)
      .then(() => console.log('Post Deleted'))
      .catch(() => console.log('Post Not Deleted'));
  };

  useEffect(() => {
    getPosts(dispatch)
      .then(() => console.log('Posts Acquired'))
      .catch(() => console.log('Posts Not Acquired'));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.posts.length > 0 ? (
            state.posts.map((value) => (
              <tr key={value._id}>
                <td>{value._id}</td>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>
                  <Link
                    to={`/posts/${value._id}`}
                    className="btn btn-sm btn-success mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removePost(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <p className="text-info m-0">No posts available.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
