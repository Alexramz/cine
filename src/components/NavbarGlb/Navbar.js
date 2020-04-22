import React, { Component } from 'react';
import Logo from './components/Logo';
import Dropdown from "./components/Dropdown";
import Buscador from "./components/Buscador";

class Navbar extends Component {
  state={
    home: "Home",
    genero: "Genero",
    peliculas: "Movies",
    series: "Series",
    about: "About",
  }
  goHome=()=>{
    this.props.history.push("/")
  }
  render(){
    const {peliculas, genero, home, about}= this.state;
    const { datosBusqueda } = this.props;
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-brand"><Logo onlogo={datosBusqueda}/></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">{home}<span className="sr-only">(current)</span></a>
              </li>
              <Dropdown
              nameDropdown={genero}
              />
              <Dropdown
              nameDropdown={peliculas}
              /> 
              <li className="nav-item">
            <a className="nav-link" href="//#region ">{about}</a>
              </li> 
            </ul>
            <Buscador
              datosBusqueda={datosBusqueda}
            />
        </div>
      </nav>
      
    );
  };
    
  }
  
  export default Navbar;