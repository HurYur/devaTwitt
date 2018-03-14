import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import UserList from './components/UsersList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Let's build small Twitter
        </p>
        <UserList></UserList>
      </div>
    );
  }
}

export default App;
