import React, { Component } from 'react';
import Categories from './components/Categories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="card-title">Categories</h1>
        <Categories />
      </div>
    );
  }
}

export default App;
