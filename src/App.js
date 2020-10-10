import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div>
  <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" />
      <Rect x="100" y="150" w="150" h="150" c="black" />
    </div>;
  }
}

class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height =0;
  color ="white";
  style = {};

  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }

      <h1>{this.title}</h1>
      <p>{this.message}</p>
    </div>;
  }
}

export default App;
