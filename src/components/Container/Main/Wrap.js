import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";
import Principal from "./Principal";
import DataApi from "../../../Config/DataApi";
import BreadCrumbs from "./BreadCrumbs";
import Tabla from "../Tabla";

var list = [1, 2, 3];

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
        /*console.log("---------Datos Navbar---------")
        console.log(imagenes)
        console.log(imagenes.imagenes)
        console.log("---------Datos Navbar---------")
        console.log("---------Datos a Array---------")
        console.log(imagenes.imagenes)//array(20)
        imagenes.imagenes.map(num=>(console.log(num)))//Map Objects cada uno
        console.log("---------Datos a Array---------")
        
           <ul>
            {list.map(item => (
                <li>{item.user}</li>
            ))}
            </ul>

        */
        
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
            
            {(list.length == 0)?
            <React.Fragment></React.Fragment>
            :<Principal
            list={list}
            objNavbar={objNavbar}
            />}

            </div>
            );   
    }
}

export default Wrap;