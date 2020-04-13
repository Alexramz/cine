import React, {Component} from "react";
import Imagen from "../Imagen";

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
        /*componentDidMount(){
            //this.setState({ list : this.props.list})
        }
        componentWillMount(){
            //this.setState({ list : this.props.list})
        }*/

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