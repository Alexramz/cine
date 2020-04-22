import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";

class Movies extends Component {
    
    datosBusqueda = (termino) =>{
        this.props.history.push("/")
    } 
    render(){
    return(
        <React.Fragment>
             <Navbar
               datosBusqueda={this.datosBusqueda}
                />
                <h1>desde Movies</h1>
        </React.Fragment>
        
    );
    }
}
export default Movies;