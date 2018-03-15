import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

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
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/">
                          <img src={logo} className="App-logo" alt="logo" />
                          <div>DevaTwitt by React</div>
                      </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <ul className="nav navbar-nav navbar-right">
                      <li key={1} ><Link to="/">Home</Link></li>
                      <li key={2} ><Link to="/users">User List</Link></li>
                      <li key={3} ><Link to="/posts">Post List</Link></li>
                      <li key={4} ><Link to="/new-user">Add user</Link></li>
                  </ul>
              </Navbar.Collapse>
          </Navbar>
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
