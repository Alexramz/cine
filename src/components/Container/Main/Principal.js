import React, {Component} from "react";
import Lorem from "../../Lorem/Lorem";
import Imagen from "../Imagen";
import Tabla from "../Tabla";
import BreadCrumbs from "./BreadCrumbs"; 

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
            list: []
        }
        componentDidMount(){
            console.log("DidMount")
            //this.setState({ list : this.props.list})
        }
        componentWillMount(){
            console.log("WillMount")
            this.setState({ list : this.props.list})
        }

        render(){
            return(
                <div className="row" style={styles.principal}> 
                {this.props.list.map(item=>(
                    <Imagen
                    key={item.id}
                    usuario={item}
                    />
                    ))}

                </div>
            );
        };
}

export default Principal;