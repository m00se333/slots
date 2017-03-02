import React from "react";

const LoginForm = React.createClass({

  loginAttempt(e){
    e.preventDefault()
    const username = this.username_field.value;
    const password = this.password_field.value;

    this.props.loginSubmit(username, password);

  },


  render(){

      return(
        <div className="loginWrapper">
          <div className="loginBox">
            <form className="loginForm" action="">
              <input ref={(input) => this.username_field = input} type="text" placeholder="username" />
              <input ref={(input) => this.password_field = input} type="text" placeholder="password" />
              <button onClick={this.loginAttempt}>Login</button>
            </form>
          </div>
        </div>
        )
  }

});

export default LoginForm;