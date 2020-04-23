import React, {Component} from "react";

class Login extends Component{
   

    handleBtnLogin = () =>{
        this.props.history.push("/")
    } 

    render(){
        return(
           <React.Fragment>
              <li className="-ctas">
                <a className="btn btn-success" href="/#/login">Log in</a>
                <a className="btn btn-info" href="/#/sign-up">Sign up</a>
            </li>
           </React.Fragment>
        )
    }

}
export default Login;