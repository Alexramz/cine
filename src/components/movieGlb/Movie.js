import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";
import Video from "./components/Video";
import Description from "./components/Description";
import Comments from "./components/Comments";
import Related from "./components/Related";

class Movie extends Component {
    state={
        id: " ",
        buscar: " ",
        pagina: "1",
        objMovie: {}
    }
    componentWillMount(){
        this.consultarApiSingleMovie()
    }    

    /*componentWillUpdate(){
        this.shouldComponentUpdate()
    }
    shouldComponentUpdate = () => {
        const { match }=this.props;
        const { buscar } = this.state;
        const id = match.params.id
        
        //const buscar = match.params.search
        const url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${match.params.search}&id=${id}`;
        
        fetch(url)
        .then(resp => resp.json())
        .then(res => this.setState({ objMovie: res.hits[0]}));
    }*/
    
    consultarApiSingleMovie=()=>{
        const { match }=this.props;
        const { buscar } = this.state;
        const id = match.params.id
        this.setState({buscar: match.params.search});
        //const buscar = match.params.search
        const url=`https://pixabay.com/api/?key=16000304-4ffaeb7967a4a1732dc1f40a0&q=${buscar}&id=${id}`;
        
        fetch(url)
        .then(resp => resp.json())
        .then(res => this.setState({ objMovie: res.hits[0]}));
        
      }
      
    datosBusqueda = (termino) =>{
        this.props.history.push("/")
    } 

    datosBusqueda = (termino) =>{
        this.props.history.push(`/${termino}`)
      } 


    render (){
        const { objMovie, buscar }=this.state;
        const styles = {
    
            img:{
                 height: 400
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
            <Description
            id = {objMovie.id}
            styles = {styles}
            objMovie= {objMovie}
            />
        </div>
        <div className="row" style={styles.principal}>
                <Video/>
        </div>
        <br></br>
        <div className="row" style={styles.principal}>
                <Comments/>
        </div>
        <br></br>
        <div className="row" style={styles.principal}>
                <Related
                buscar={buscar}/>
        </div>
            </React.Fragment>
        )
    }
}
export default Movie;