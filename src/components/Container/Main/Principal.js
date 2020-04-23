import React, {Component} from "react";
import Imagen from "./Imagen";

const styles = {
    principal:{
        marginLeft: 100,
        marginRight: 100,
        borderRight: 0,
        borderLeft: 0,
    }
  };

class Principal extends Component{

        state={
            list: this.props.list
        }
        
        render(){
            const { list, idMovie, buscar } = this.props
            return(
                <div className="row" style={styles.principal}> 

                    {list.map(item=>(
                    <Imagen
                    key={item.id}
                    id={item.id}
                    usuario={item}
                    idMovie={idMovie}
                    buscar={buscar}
                    />
                    ))}
                </div>
            );
        };
}

export default Principal;