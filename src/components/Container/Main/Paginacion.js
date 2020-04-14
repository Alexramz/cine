import React,{ Component } from "react";

class Paginacion extends Component{

    render(){
        return(
            
                <div className="row">     
                    <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" onClick={this.props.paginaAnterior}>&laquo;</a>
                    </li>
                    <li className="page-item active">
                    <a className="page-link" href="//#region ">1</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="//#region ">2</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="//#region ">3</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="//#region ">4</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="//#region ">5</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#" onClick={this.props.paginaSiguiente}>&raquo;</a>
                    </li>
                    </ul>
                </div>
        )
    }
}

export default Paginacion;