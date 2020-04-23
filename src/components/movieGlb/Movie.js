import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";
import Video from "./components/Video";

class Movie extends Component {
    state={
        objMovie: {}
    }
    componentWillMount(){
        this.consultarApi()
    }    

    consultarApi=()=>{
        const { match }=this.props;
        const id = match.params.id
        const buscar = match.params.search
        const url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${buscar}&id=${id}`;
        
        fetch(url)
        .then(resp => resp.json())
        .then(res => this.setState({ objMovie: res.hits[0]}));
        
      }

    datosBusqueda = (termino) =>{
        this.props.history.push("/")
    } 
    render (){
        const { objMovie }=this.state;
        const styles = {
    
            img:{
                 height: 200
            },
            principal:{
                marginLeft: 100,
                marginRight: 100,
                borderRight: 0,
                borderLeft: 0,
            }
          }
        return(
            <React.Fragment>
            <Navbar
                datosBusqueda={this.datosBusqueda}
            />
        <br></br>
        <div className="row" style={styles.principal}>
        
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <img tyle={styles.img} src={objMovie.userImageURL} className="card-img-top" alt="imagen" />  
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <h1>{objMovie.tags}</h1>
                </div>
        
        </div>
        <div className="row" style={styles.principal}>
        
                <Video/>
        
        </div>
            </React.Fragment>
        )
    }
}
export default Movie;