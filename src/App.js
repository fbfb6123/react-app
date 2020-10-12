import React, { Component } from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';

//複数コンポーネント
class App extends Component {
  data = [];

  msgStyle = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }

  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
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
  {this.state.flg ?
  <p style={this.msgStyle1}>{this.state.msg}</p>
  :
  <p style={this.msgStyle2}>{this.state.msg}です</p>
  }
  <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }
}

export default App;
