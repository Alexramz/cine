import React, {Component} from "react";

class Login extends Component{
   

    handleBtnLogin = () =>{
        this.props.history.push("/")
    } 

    render(){
        return(
           <React.Fragment>
              <li class="-ctas">
                <a className="btn btn-success" href="/login">Log in</a>
                <a className="btn btn-info">Sign up</a>
            </li>
           </React.Fragment>
        )
    }

}
export default Login;