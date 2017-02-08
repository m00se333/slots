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

          <form className="loginForm" action="">
            <input ref={(input) => this.username_field = input} type="text" placeholder="username" />
            <input ref={(input) => this.password_field = input} type="text" placeholder="password" />
            <button onClick={this.authenticateUser}>Login</button>
          </form>

        )
  }

});

export default LoginForm;