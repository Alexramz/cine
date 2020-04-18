import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

class Logo extends Component {

    onlogo = () => {
      this.props.onlogo("react");
      }

    render(){
      const {none}=this.props;
    return (
          <img src={logo} alt="logo" width= "50" height="50" onClick={this.onlogo}/>
    );
    }

}
export default Logo;
