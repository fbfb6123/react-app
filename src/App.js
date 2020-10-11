import React, { Component } from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';

//複数コンポーネント
class App extends Component {
  msgStyle = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }

  constructor(props) {
    super(props);
    this.state = {
      msg:'Hello Component',
    };
  }
  render() {
    return <div>
  <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" r="50" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="black" r="25" />
    </div>;
  }
}

export default App;
