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

  btnStyle = {
    fontSize:"20pt",
    padding:"0px 10px"
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
  <p style={this.msgStyle}>{this.state.msg}</p>
  <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;
