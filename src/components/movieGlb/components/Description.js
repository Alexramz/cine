import React, {Component} from "react";
import Lorem from "../../loremGlb/Lorem";

class Description extends Component{

    render(){
        const {objMovie, styles, id} = this.props; 
        
        return(
            <React.Fragment>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <img style={styles.img} src={objMovie.previewURL} className="card-img-top" alt="imagen" />  
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <h1>{objMovie.tags}</h1>
                    <h2>{id}</h2>
                    <Lorem/>
                </div>
            </React.Fragment>
        )
    }
}
export default Description;