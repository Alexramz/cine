import React from "react";

const styles = {
    
    img:{
         height: 200
    }
  }

const Imagen = (props)=>{
   
    const {usuario, id, idMovie}=props;
    
return(
    
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <img src={usuario.previewURL} className="card-img-top" style={styles.img} alt="imagen" onClick={()=>{idMovie(id)}} href="/#/movie"/>
        <div>
            <p className="card-text">{usuario.likes} Me gusta</p>
            <p className="card-text">{usuario.views} Vistas</p>
            <a className="btn btn-primary btn-block" rel="noopener noreferrer" href="/#/movie">Ver Imagen</a>
        </div>   
        </div>
    
);
}
export default Imagen;