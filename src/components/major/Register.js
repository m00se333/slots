import React from "react";
import {RegistrationForm, LoginLink} from "react-stormpath";


const Register = React.createClass({
  render(){
    return(
      <div>
        <h1>This is the register page</h1>
        <button onClick={this.hitRegister}></button>
      </div>
      )
  }

});

export default Register;