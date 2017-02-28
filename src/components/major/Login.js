import React from "react";

import LoginForm from "../minor/LoginForm";
import SignUpForm from "../minor/SignUpForm";

const Login = React.createClass({

  render(){

    return(

        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <LoginForm />
          <a href="/register">New User?</a>
        </div>
      )
  }
});

export default Login;