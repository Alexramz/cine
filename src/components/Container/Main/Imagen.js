import React from "react";

const styles = {
    
    img:{
         height: 320
    }
  }

const Imagen = (props)=>{
   
    const {usuario, buscar, key}=props;
    
return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <a href={`/#/movie/${buscar}/${usuario.id}`}>
                <img src={usuario.previewURL} className="card-img-top" style={styles.img} alt="imagen"/>
            </a>
            <div>
            <p className="card-text">{usuario.id} Vistas</p>
            </div>   
        </div>
);
}
export default Imagen;