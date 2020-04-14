import React, { Component } from 'react';
import Logo from './Logo';
import Dropdown from "./Dropdown";
import Buscador from "./Buscador";

class Navbar extends Component {
  state={
    home: "Home",
    genero: "Genero",
    peliculas: "Peliculas",
    series: "Series",
    about: "About",
    imagenes: [],
    buscar: "",
    pagina: 1,
    isSiguiente: false,
    isAnterior: false
  }
  /*
  componentWillMount(){
    this.consultarApi()
    this.setState({isSiguiente: this.props.isSiguiente})
    this.setState({isAnterior: this.props.isAnterior})
  }
  
  componentDidMount(){
    this.setState({isSiguiente: this.props.isSiguiente})
    this.setState({isAnterior: this.props.isAnterior})
  }

  consultarApi=()=>{
    const url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${this.state.buscar}&per_page=30&page=${this.state.pagina}`;
    console.log(url);
    fetch(url)
    .then(resp=>resp.json())
    .then(res=>this.setState({
      imagenes: res.hits
    },()=>{ 
      this.props.datosBusqueda(this.state)}));
  }
 
  datosBusqueda = (termino) =>{
    this.setState({buscar: termino},()=>{this.consultarApi();})
  } 

  onLogo=(termino)=>{
   this.setState({buscar: termino},()=>{this.consultarApi();})
  }*/

  render(){
    const {peliculas, genero}= this.state;
    const { onlogo } = this.props;
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-brand"><Logo onlogo={onlogo}/></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="//#region ">{this.state.home}<span className="sr-only">(current)</span></a>
              </li>
              <Dropdown
              nameDropdown={genero}
              />
              <Dropdown
              nameDropdown={peliculas}
              /> 
              <li className="nav-item">
            <a className="nav-link" href="//#region ">{this.state.about}</a>
              </li> 
            </ul>
            <Buscador
              datosBusqueda={this.props.datosBusqueda}
            />
        </div>
      </nav>
      
    );
  };
    
  }
  
  export default Navbar;