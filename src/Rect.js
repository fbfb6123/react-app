import React, { Component } from 'react';

class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height =0;
  color ="white";
  style = {};

  constructor(props) {
    super();
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.redius = props.r;
    this.style = {
      backgroundColor:this.color,
      position:"absolute",
      left:this.x + "px",
      top:this.y + "px",
      width:this.width + "px",
      height:this.height + "px",
      borderRadius:this.redius + "px"
    }
  }
  render() {
    return <div style={this.style}></div>;
  }
}

export default Rect;