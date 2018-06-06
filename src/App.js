import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h4>Made with ♥ from Torcy, FR</h4>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
