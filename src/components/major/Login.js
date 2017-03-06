import React from "react";

import LoginForm from "../minor/LoginForm";

const Login = React.createClass({

  componentDidUpdate(){

    const {success, access_token} = this.props.loginStatus;


    const tokenCheck = access_token.length === 450 ? true : false;

    if (success === true && tokenCheck === true){
      console.log("It worked getting your data now...");
      this.props.getUserData(access_token);
    } else if (success === false || tokenCheck === false){
      console.log("Something went wrong...");
    }

  },

  render(){

    return(

        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <LoginForm loginSubmit={this.props.loginSubmit} />
          <a href="/register">New User?</a>
        </div>
      )
  }
});

export default Login;