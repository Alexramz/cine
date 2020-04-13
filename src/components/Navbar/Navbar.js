import React, { Component } from 'react';
import Logo from './Logo';
import Dropdown from "./Dropdown";
import Buscador from "./Buscador";
import Resultado from "../Container/Main/Resultado";
import Wrap2 from "../Container/Main/Wrap";

class Navbar extends Component {
  state={
    home: "Home",
    genero: "Genero",
    peliculas: "Peliculas",
    series: "Series",
    about: "About",
    imagenes: [],
    buscar: ""
  }
  componentWillMount(){
    this.consultarApi()
  }
  consultarApi=()=>{
    const url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${this.state.buscar}`;
    console.log(url);
    fetch(url)
    .then(resp=>resp.json())
    .then(res=>this.setState({
      imagenes: res.hits
    },()=>{ console.log(res.hits)
      this.props.datosBusqueda(this.state/*.imagenes*/)}));
  }
 
  datosBusqueda = (termino) =>{
    this.setState({
      buscar: termino
    },()=>{
      this.consultarApi();
    })
  } 

  render(){
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#"><Logo/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">{this.state.home}<span className="sr-only">(current)</span></a>
      </li>
      <Dropdown
      name={this.state.genero}
      />
      <Dropdown
      name={this.state.peliculas}
      /> 
      <li className="nav-item">
    <a className="nav-link" href="#">{this.state.about}</a>
      </li> 
    </ul>
    <Buscador
      datosBusqueda={this.datosBusqueda}
    />
  </div>
</nav>
    );
  };
    
  }
  
  export default Navbar;