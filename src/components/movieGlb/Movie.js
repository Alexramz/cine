import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";
import { render } from "@testing-library/react";

class Movie extends Component {
    datosBusqueda = (termino) =>{
        this.props.history.push("/")
    } 
    render (){
        const { match }=this.props;
        return(
            <React.Fragment>
            <Navbar
                datosBusqueda={this.datosBusqueda}
            />
        <h1>desde movie {match.params.id}</h1>
            </React.Fragment>
        )
    }
}
export default Movie;