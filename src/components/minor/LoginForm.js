import React from "react";

const LoginForm = React.createClass({


  render(){

      return(
        <div className="loginWrapper">
          <div className="loginBox">
            <form className="loginForm" action="">
              <input ref={(input) => this.username_field = input} type="text" placeholder="username" />
              <input ref={(input) => this.password_field = input} type="text" placeholder="password" />
              <button onClick={this.authenticateUser}>Login</button>
            </form>
          </div>
        </div>
        )
  }

});

export default LoginForm;