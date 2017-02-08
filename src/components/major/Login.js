import React from "react";

import LoginForm from "../minor/LoginForm";
import SignUpForm from "../minor/SignUpForm";

const Login = React.createClass({

  // for the sake of simply switching forms
  getInitialState(){

    return {
      form: null
    }

  },


  componentDidUpdate(){
    if (this.props.loginStatus.success === true){
        this.props.router.push("/student/hello");
        console.log("moving...")
    } 
  },

  componentWillUnmount(){
    this.props.resetSuccess();
  },

  displayForm(){
    
    if (this.state.form === "login"){
      return <LoginForm loginSubmit={this.props.loginSubmit} />
    } else if (this.state.form === "signUp"){
      return <SignUpForm />
    } 

  },

  renderLogin(){
    this.setState({
      form: "login"
    });
  },

  renderSignUp(){
    this.setState({
      form: "signUp"
    })
  },

  render(){

    return(

        <div className="loginBox">
          <h1>Slots</h1>
          <button onClick={this.renderLogin}  name="login" >Login</button>
          <button onClick={this.renderSignUp} name="signUp" >Sign Up</button>            
          {this.displayForm()}
        </div>
      )
  }
});

export default Login;