import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div>
      <h1>{this.title}</h1>
      <p>{this.message}</p>
    </div>;
  }
}

export default App;
