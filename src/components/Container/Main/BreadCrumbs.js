import React, {Component} from "react";

class BreadCrumbs extends Component{

    render(){
        return(
            <div  className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="//#region ">Home</a></li>
            <li className="breadcrumb-item active">{this.props.buscar}</li>
            </ol>
            </div>
        );
    }

}
export default BreadCrumbs;