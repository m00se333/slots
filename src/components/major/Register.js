import React from "react";
import { connect } from "react-redux";

import {SignUpForm} from  "../minor/SignUpForm";
import { registerSubmit } from "../../actions/userActions";

const Register = React.createClass({

  handleRegister(e){

    e.preventDefault();


      
      const data = {
        username: this.usernameRef.value,
        password: this.passwordRef.value,
        email: this.emailRef.value,
        pin: this.pinRef.value
      }

      console.log(data);
      this.props.registerSubmit(data);

    

  },

usernameRef(input){
  this.usernameRef = input;
},

passwordRef(input){
  this.passwordRef = input;
},

emailRef(input){
  this.emailRef = input;
},

pinRef(input){
  this.pinRef = input;
},

  render(){
    return(
        <div className="loginComponentWrapper">
          <h1>Slots</h1>
          <SignUpForm handleRegister={this.handleRegister}
                      usernameRef={this.usernameRef}
                      passwordRef={this.passwordRef}
                      emailRef={this.emailRef}
                      pinRef={this.pinRef} />
        </div>
      )
  }

});

const mapStateToProps = null;

const mapDispatchToProps = {

    registerSubmit

};



export default connect(mapStateToProps, mapDispatchToProps)(Register);