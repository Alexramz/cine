import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class Logo extends Component {

  onlogo = () => {
    this.props.onlogo("react");
    }

  render(){
  return (
        <img src={logo} alt="logo" width= "50" height="50" onClick={this.onlogo}/>
  );
  }
}
export default Logo;
