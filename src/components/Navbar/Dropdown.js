import React, { Component } from 'react';

class Dropdown extends Component {

  render(){
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{this.props.name}</a>
        <div className="dropdown-menu" >
          <a className="dropdown-item" href="#">Estrenos</a>
          <a className="dropdown-item" href="#">Mas Vistas</a>
          <a className="dropdown-item" href="#">Ranking</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">{this.props.name}</a>
        </div>
      </li>
    
    );
  }
    
  }
  
  export default Dropdown;