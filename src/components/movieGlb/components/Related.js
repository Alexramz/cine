import React, {Component} from "react";
import Imagen from "../../Container/Main/Imagen";
class Related extends Component{
    
    state={
        listMoivies : []
    }
    componentWillMount(){
        this.consultarApi()
      }

    consultarApi = () => {
        
        const { buscar } = this.props;
        let url;
        url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${buscar}&per_page=8`;
        fetch(url)
        .then(resp=>resp.json())
        .then(res=>this.setState({listMoivies: res.hits}));
      }

    render(){
        const {listMoivies} = this.state;
        const {buscar} = this.props;
        const styles = {
            principal:{
                marginLeft: 100,
                marginRight: 100,
                borderRight: 0,
                borderLeft: 0,
            }
          };
        return(
            <React.Fragment>
                <h3>Related Movies</h3>
                <div className="row" style={styles.principal}> 
                    {listMoivies.map(item=>(
                    <Imagen
                    key={item.id}
                    usuario={item}
                    buscar={buscar}
                    />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Related;