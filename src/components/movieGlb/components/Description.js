import React, {Component} from "react";

class Description extends Component{

    render(){
        const {objMovie, styles} = this.props; 
        return(
            <React.Fragment>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <img style={styles.img} src={objMovie.userImageURL} className="card-img-top" alt="imagen" />  
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <h1>{objMovie.tags}</h1>
                </div>
            </React.Fragment>
        )
    }
}
export default Description;