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

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Appコンポーネント
  class App extends Component {

  render(){
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}
export default App;