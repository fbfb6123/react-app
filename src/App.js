import React, { Component } from 'react';
import Rect from './Rect';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

//ステートのマッピング
function mappingState(state) {
  return state;
}

//Appのコンポーネント
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

//ストアのコネクト
App = connect() (App);

//メッセージの表示コンポーネント
class Message extends Component {
  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <p style={this.style}>
        {this.props.message}:{this.props.counter}
      </p>
    );
  }
}

//ストアのコネクト
Message = connect(mappingState) (Message);
export default App;