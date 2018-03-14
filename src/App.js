import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import UserList from './components/users/UsersList'
import NewUser from './components/users/NewUser'
import PostList from "./components/posts/PostsList";

class App extends Component {
  render() {
      const Home = () => (
          <div>
              <h2>Home</h2>
          </div>
      );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DevaTwitt to React</h1>
          <nav className="menu">
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/users">User List</Link>
                  </li>
                  <li>
                      <Link to="/posts">Post List</Link>
                  </li>
                  <li>
                      <Link to="/new-user">Add user</Link>
                  </li>
              </ul>
          </nav>
        </header>
        <main>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserList} />
                <Route path="/new-user" component={NewUser} />
                <Route path="/posts" component={PostList} />
            </div>
        </main>
      </div>
    );
  }
}

export default App;
