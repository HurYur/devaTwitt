import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';
import users from './api/users.json';
import posts from './api/posts.json';

import Home from './components/Home'
import UserList from './components/users/UsersList'
import SignUp from './components/users/SignUp'
import PostList from "./components/posts/PostsList";
import Login from "./components/Login/login"
import {setCurrentUser} from "./helpers/storageHelper";

class App extends Component {
  constructor(props){
      super(props);
      this.loadDataToLocalStorage();
  }
  loadDataToLocalStorage(){
      setCurrentUser(users[1]);
      localStorage.setItem('devaTwitt.users', JSON.stringify(users));
      localStorage.setItem('devaTwitt.posts', JSON.stringify(posts));
  }
  render() {
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
                      <li key={4} ><Link to="/sign-up">Sign Up</Link></li>
                      <li key={5} ><Link to="/login">Login</Link></li>
                  </ul>
              </Navbar.Collapse>
          </Navbar>
        </header>
        <main>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserList} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/posts" component={PostList} />
                <Route path="/login" component={Login} />
            </div>
        </main>
      </div>
    );
  }
}

export default App;
