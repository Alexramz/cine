import React, { Component } from 'react';

class DropdownGenero extends Component {

  render(){
    const { nameDropdown, listGenero } = this.props;
    return (
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="//#region " role="button" aria-haspopup="true" aria-expanded="false">{nameDropdown}</a>
        <div className="dropdown-menu" >
            {listGenero.map(item=>(
                <a className="dropdown-item" href="//#region ">{item}</a>))}
        </div>
      </li>
    
    );
  }
    
  }
  
  export default DropdownGenero;