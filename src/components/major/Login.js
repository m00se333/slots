import React from "react";

import LoginForm from "../minor/LoginForm";

const Login = React.createClass({

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