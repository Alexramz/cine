import React, {Component} from "react";

class BreadCrumbs extends Component{

    render(){
        const {buscar} = this.props;
        return(
            <div  className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="//#region ">Home</a></li>
            <li className="breadcrumb-item active">{buscar}</li>
            </ol>
            </div>
        );
    }

}
export default BreadCrumbs;