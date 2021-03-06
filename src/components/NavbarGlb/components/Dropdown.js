import React, { Component } from 'react';

class Dropdown extends Component {

  render(){
    const { nameDropdown } = this.props;
    return (
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="//#region " role="button" aria-haspopup="true" aria-expanded="false">{nameDropdown}</a>
        <div className="dropdown-menu" >
          <a className="dropdown-item" href="//#region ">Estrenos</a>
          <a className="dropdown-item" href="//#region ">Mas Vistas</a>
          <a className="dropdown-item" href="//#region ">Ranking</a>
          <a className="dropdown-item" href={`/#/${nameDropdown}`}>{nameDropdown}</a>
        </div>
      </li>
    
    );
  }
    
  }
  
  export default Dropdown;