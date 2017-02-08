import React from "react";

const LoginForm = React.createClass({

  authenticateUser(e){
    e.preventDefault();

    this.props.loginSubmit(this.username_field.value, this.password_field.value)

    this.username_field.value = "";
    this.password_field.value = "";


  },


  render(){

      return(
        <div className="loginWrapper">
          <button className="formSelect" onClick={this.props.renderSignUp} name="signUp" >Sign Up</button>
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