import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";

// Firebaseの設定
var firebaseConfig = {
  apiKey: "AIzaSyB3oCAV7BlVlWPrTD_wFf13jyoVt6sDyvY",
  authDomain: "react-f5f3c.firebaseapp.com",
  databaseURL: "https://react-f5f3c.firebaseio.com",
  projectId: "react-f5f3c",
  storageBucket: "react-f5f3c.appspot.com",
  messagingSenderId: "851334510825",
  appId: "1:851334510825:web:6e28f9153216d3be41d878",
  measurementId: "G-9VSHFMFXGZ"
};



  render(){
    return (
      <p style={this.style}>
        {this.props.message}:{this.props.counter}
      </p>
    );
  }
}
export default App;