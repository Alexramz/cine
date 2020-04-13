import React, { Component } from 'react';

class Dropdown extends Component {

  render(){
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="//#region " role="button" aria-haspopup="true" aria-expanded="false">{this.props.name}</a>
        <div className="dropdown-menu" >
          <a className="dropdown-item" href="//#region ">Estrenos</a>
          <a className="dropdown-item" href="//#region ">Mas Vistas</a>
          <a className="dropdown-item" href="//#region ">Ranking</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="//#region ">{this.props.name}</a>
        </div>
      </li>
    
    );
  }
    
  }
  
  export default Dropdown;