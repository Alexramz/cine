import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";

const Movies =(match) => {
    
     
    
    return(
        <React.Fragment>
             <Navbar
               datosBusqueda={this.datosBusqueda}
                />
                <h1>desde Movies {match.params.username}</h1>
        </React.Fragment>
        
    );
    
}
export default Movies;