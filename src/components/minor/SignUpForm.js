import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

export const SignUpForm = ({handleRegister, usernameRef, passwordRef, emailRef, pinRef}) => (

    <form id="registerForm">
        
        <div className="inputBox">
          <label htmlFor="username">Choose a username</label>
          <input ref={usernameRef} type="text" defaultValue="placeholder username" />
        </div>

        <div className="inputBox">
          <label htmlFor="password">Choose a password</label>
          <input ref={passwordRef} type="text" defaultValue="placeholder password"/>

        </div>

        <div className="inputBox">
            <label htmlFor="confirm_pass">Confirm password {`\u00A0\u00A0\u00A0👻`}</label>
            <input type="text" defaultValue="placeholder confirm password"/>  
          
        </div>

        <div className="inputBox">
          <label htmlFor="email">Enter email</label>
          <input ref={emailRef} type="text" defaultValue="placeholder@email.com"/>

        </div>

        <div className="inputBox">
          <label htmlFor="pin">School PIN</label>
          <input ref={pinRef} type="text" defaultValue="placeholder pin"/>

        </div>
          
        
        <button onClick={handleRegister}>Register</button>
        
      </form>

  );