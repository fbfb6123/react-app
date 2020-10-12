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

  msgStyle = {
    fontSize:"20pt",
    color:"white",
    backgroundColor:"#900",
    margin:"20px 0px",
    padding:"5px",
    borderBottom:"2px solid #900"
  }

  btnStyle = {
    fontSize:"20pt",
    padding:"10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      msg:'count start!',
      flg:true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg
    }));
  }

  render() {
    return <div>
  <h1>React</h1>
  <p style={this.msgStyle}>{this.state.msg}</p>
  <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }
}

export default App;
