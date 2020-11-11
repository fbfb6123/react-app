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

  // Firebaseからのデータ取得
  getFireData(){
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
      .limitToFirst(10)
      .on('value', (snapshot)=>{
        self.setState({
          data:snapshot.val()
        });
      });
  }
}