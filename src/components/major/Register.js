import React from "react";

import SignUpForm from  "../minor/SignUpForm";

const Register = React.createClass({
  render(){
    return(
        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <SignUpForm />
        </div>
      )
  }

});

export default Register;