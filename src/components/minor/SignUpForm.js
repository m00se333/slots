import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const SignUpForm = React.createClass({

  handleSubmit(e){

    e.preventDefault();


    console.log("submitted");
  },

  render(){
    

    return(

      <form onSubmit={this.handleSubmit}>

        <label htmlFor="username">Choose a username</label>
        <input name="username" type="text" />

        <label htmlFor="password"></label>
        <input name="password" type="text"/>

        <label htmlFor="confirm_pass"></label>
        <input name="confirm_pass" type="text"/>

        <label htmlFor="email"></label>
        <input name="email" type="text"/>

        <label htmlFor="pin"></label>
        <input name="pin" type="text"/>

        <button>Register</button>

      </form>

      )


  }
});

export default SignUpForm;