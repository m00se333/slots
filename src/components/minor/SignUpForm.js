import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const SignUpForm = React.createClass({

  handleSubmit(e){

    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data);
    
  },

  render(){
    

    return(

      <form id="registerForm" onSubmit={this.handleSubmit}>
        
        <div className="inputBox">
          <label htmlFor="username">Choose a username</label>
          <input name="username" type="text" defaultValue="placeholder" />
        </div>

        <div className="inputBox">
          <label htmlFor="password">Choose a password</label>
          <input name="password" type="text" defaultValue="placeholder"/>

        </div>

        <div className="inputBox">
            <label htmlFor="confirm_pass">Confirm password {`\u00A0\u00A0\u00A0👻`}</label>
            <input name="confirm_pass" type="text" defaultValue="placeholder"/>  
          
        </div>

        <div className="inputBox">
          <label htmlFor="email">Enter email</label>
          <input name="email" type="text" defaultValue="placeholder"/>

        </div>

        <div className="inputBox">
          <label htmlFor="pin">School PIN</label>
          <input name="pin" type="text" defaultValue="placeholder"/>

        </div>
          
        
        <button>Register</button>
        
      </form>

      )


  }
});

export default SignUpForm;