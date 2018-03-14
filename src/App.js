import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import UserList from './components/UsersList'
import PostList from "./components/PostsList";

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
                      <Link to="/users">UserList</Link>
                  </li>
                  <li>
                      <Link to="/posts">PostList</Link>
                  </li>
              </ul>
          </nav>
        </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
            <Route path="/posts" component={PostList} />
        </main>
      </div>
    );
  }
}

export default App;
