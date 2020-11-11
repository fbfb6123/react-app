import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";

class Sampledata extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
    this.getFireData();
  }

  
}