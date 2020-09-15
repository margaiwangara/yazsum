import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PostProvider from './context/app/PostContext';
import Home from './views/Home';
import EditPost from './views/EditPost';
import CreatePost from './views/CreatePost';

// localhost:3000/ /posts /posts/:id
function App() {
  return (
    <Router>
      <PostProvider>
        <div className="navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              yazsum
            </Link>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/posts" className="btn btn-primary">
                  Create Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container my-3">
          <Switch>
            <Route
              exact
              name="Home"
              render={(props) => <Home {...props} />}
              path="/"
            />
            <Route
              exact
              name="Create Post"
              render={(props) => <CreatePost {...props} />}
              path="/posts"
            />
            <Route
              exact
              name="Edit Post"
              render={(props) => <EditPost {...props} />}
              path="/posts/:id"
            />
          </Switch>
        </div>
      </PostProvider>
    </Router>
  );
}

export default App;
