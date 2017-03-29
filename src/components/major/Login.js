import React from "react";
import {connect} from "react-redux";

import {loginSubmit, getUserData} from "../../actions/userActions";
import {LoginForm} from "../minor/LoginForm";

const Login = React.createClass({

  handleSubmit(e){
      e.preventDefault()
      this.props.loginSubmit(
          this.usernameInput.value,
          this.passwordInput.value
        );

  },

  setUsernameRef(input){
    this.usernameInput = input;
  },

  setPasswordRef(input){
    this.passwordInput = input;
  },

  render(){

    return(

        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <LoginForm handleSubmit={this.handleSubmit}
                     setUsernameRef={this.setUsernameRef}
                     setPasswordRef={this.setPasswordRef}/>
          <a href="/register">New User?</a>
        </div>
      )
  }
});

const mapStateToProps = (state) => {
  return{
    loginStatus: state.loginStatus,
    user: state.user
  }
};
const mapDispatchToProps = {
  loginSubmit,
  getUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);