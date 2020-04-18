import React, {Component} from "react";
import Navbar from "../NavbarGlb/Navbar";
class Login extends Component{
    state={

    }

    datosBusqueda = (termino) =>{
        this.props.history.push("/")
    } 

    render(){
        return(
           <React.Fragment>
               
               <Navbar
               datosBusqueda={this.datosBusqueda}
                />
               
                <div className="row justify-content-center">
                
                
                <div className="container">
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/> 
    
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    
                <form>
                    <fieldset>
                        <legend>Login</legend>
                        
                        <div className="form-group">
                            <label for="Alex">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter Name" name="name"/>
                        </div>

                        <div className="form-group">
                            <label for="26">Age</label>
                            <input type="text" className="form-control" id="age" aria-describedby="age" placeholder="Enter Age" name="age"/>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                        </div>
                      
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>


               </div>
               
           </React.Fragment>
        )
    }

}
export default Login;