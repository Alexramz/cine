import React,{ Component } from "react";

class Paginacion extends Component{

    render(){
        const {paginaAnterior, paginaSiguiente, pagina} = this.props;
        return(
            
                <div className="row">     
                    <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" onClick={paginaAnterior}>&laquo;</a>
                    </li>

                    <li className="page-item active">
                    <a className="page-link" href="//#region ">-</a>
                    </li>

                    <li className="page-item active">
                    <a className="page-link" href="//#region ">-</a>
                    </li>


                    <li className="page-item active">
                    <a className="page-link" href="//#region ">{pagina}</a>
                    </li>

                    <li className="page-item active">
                    <a className="page-link" href="//#region ">-</a>
                    </li>

                    <li className="page-item active">
                    <a className="page-link" href="//#region ">-</a>
                    </li>

                    <li className="page-item">
                    <a className="page-link" href="#" onClick={paginaSiguiente}>&raquo;</a>
                    </li>
                    </ul>
                </div>
        )
    }
}

export default Paginacion;