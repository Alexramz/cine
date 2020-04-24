import React, { Component } from "react";
import Navbar from "../../NavbarGlb/Navbar";
import Principal from "./Principal";
import BreadCrumbs from "./BreadCrumbs";
import Paginacion from "../../paginacionGlb/Paginacion";
import Movie from "../../movieGlb/Movie";

class Wrap extends Component{

    state={

        list: [],
        buscar: " ",
        pagina: "1",
        idMovie: ""
        
    }
    componentWillMount(){
        this.consultarApi()
      }
   
    consultarApi=()=>{
        const { buscar, pagina } = this.state
        const { match } = this.props;
        const numMovies = 16;
        let url;
        if(match.params.query == null){
            url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${buscar}&per_page=${numMovies}&page=${pagina}`;
        }else{
            this.setState({ buscar: match.params.query})
            url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${match.params.query}&per_page=${numMovies}&page=${pagina}`;
        }
        
        
        
        fetch(url)
        .then(resp=>resp.json())
        .then(res=>this.setState({list: res.hits}));
      }

      datosBusqueda = (termino) =>{
          this.setState({buscar: termino, pagina: 1},()=>{this.consultarApi();})
      } 

       paginaAnterior=()=>{
           
            let pagina = this.state.pagina;
            
            if(pagina === 1){
                //no consulta paginas menores a 1
            }else{
                    pagina --
                    this.setState({pagina: pagina--},
                        ()=>{this.consultarApi()})
            }

        }

       paginaSiguiente=()=>{
        let pagina = this.state.pagina;
        pagina ++
        this.setState({pagina: pagina},
            ()=>{this.consultarApi()})
       }
       
       selectPage=()=>{
        const { list, buscar, pagina,idMovie } = this.state;

            if(idMovie !== ""){
                return(
                    <React.Fragment>
                        <Movie/>
                    </React.Fragment>
                )
            }else{
                return(
                    <React.Fragment>
                        {                
                            (list.length === 0)?
                                <React.Fragment>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                <div className="row justify-content-center">
                                    <Paginacion
                                    pagina={pagina}
                                    paginaAnterior={this.paginaAnterior}
                                    paginaSiguiente={this.paginaSiguiente}
                                    />
                                    <Principal
                                    list={list}
                                    idMovie={this.idMovie}
                                    buscar={this.state.buscar}
                                    />
                                    <Paginacion
                                    pagina={pagina}
                                    paginaAnterior={this.paginaAnterior}
                                    paginaSiguiente={this.paginaSiguiente}
                                    />
                                </div>
                                </React.Fragment>
                         }
                    </React.Fragment>
                )
            }
       }

       idMovie=(idMovie)=>{
           this.setState({idMovie: idMovie})
        
       }

    render(){
        const { list, buscar, pagina,idMovie } = this.state;
        return(
            <div>
                <Navbar
                    datosBusqueda={this.datosBusqueda}
                />
                <BreadCrumbs
                     datosBusqueda={this.datosBusqueda}
                     buscar= {buscar}
                     pagina= {pagina}
                />
                
                <React.Fragment>
                        {this.selectPage()}
                </React.Fragment>

            </div>
            );   
    }
}

export default Wrap;