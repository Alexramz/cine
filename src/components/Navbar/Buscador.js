import React, { Component } from 'react';

class Buscador extends Component {
    
        busquedaRef = React.createRef();

        obtenerDatos = (e) => {
            e.preventDefault();
            const termino = this.busquedaRef.current.value;
            this.props.datosBusqueda(termino);
        }
        
    render(){
        
        return (
            <form onSubmit={this.obtenerDatos} className="form-inline my-2 my-lg-0">
                <button className="btn btn-info" type="submit">Search...</button>
                <input ref={this.busquedaRef} className="form-control mr-sm-2" type="text" placeholder="Search"></input>
            </form>    
            
        );
    }
    
  }
  
  export default Buscador;
