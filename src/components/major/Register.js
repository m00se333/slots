import React from "react";

import SignUpForm from  "../minor/SignUpForm";

const Register = React.createClass({
  render(){
    return(
        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <SignUpForm testRegister={this.props.testRegister} />
        </div>
      )
  }

});

export default Register;