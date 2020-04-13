import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";
import Principal from "./Principal";
import BreadCrumbs from "./BreadCrumbs";
import Paginacion from "./Paginacion";

class Wrap extends Component{

    state={
        objNavbar: [],
        list: [],
        buscar: "",
        
    }
   
    obtenerImagenes=(imagenes)=>{
        this.setState({ 
                        list: imagenes.imagenes,
                        objNavbar: imagenes,    
                        buscar: imagenes.buscar
        });
           
    }

    render(){
        const { list, buscar, objNavbar } = this.state;
        return(
            <div>
           
            <Navbar
             datosBusqueda={this.obtenerImagenes}
            />
            
            <BreadCrumbs
            buscar= {buscar}
            />
            <div className="row justify-content-center">
    
            <Paginacion/>
        
            
            {(list.length === 0)?
            <React.Fragment>
            </React.Fragment>
            :<Principal
            list={list}
            objNavbar={objNavbar}
            />}

            <Paginacion/>
            
            </div>
            
            </div>
            );   
    }
}

export default Wrap;