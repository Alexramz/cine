import React, { Component } from "react";
import Imagen from "../Container/Main/Imagen";

class Wrap extends Component{
    
    mostrarImagenes =()=>{
        const imagenes = this.props.imagenes
        console.log(imagenes)

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen=>(
                        <Imagen
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
    render(){
        return(
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
            
        );
    }
}

export default Wrap;