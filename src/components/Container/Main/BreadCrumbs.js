import React, {Component} from "react";

class BreadCrumbs extends Component{

    goHome=()=>{
        this.props.datosBusqueda("react")
    }

    render(){
        const {buscar, pagina} = this.props;
        return(
            <div  className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item" onClick={this.goHome}><a>Home</a></li>
            {
                (buscar === "")?
                <React.Fragment>
                </React.Fragment>
                :    
                <li className="breadcrumb-item active">{buscar}</li>
            }
            
            <li class="breadcrumb-item active">{pagina}</li>
            </ol>
            </div>
        );
    }

}
export default BreadCrumbs;