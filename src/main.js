import React from "react";
import {render} from "react-dom";

import "./stylesheets/styles.css";


const Login = React.createClass({
  render(){
    return(

        <div className="loginBox">
          <h1>Slots</h1>
            
            <input type="text" placeholder="username" />
            
            <input type="text" placeholder="password" />

            <button>Login</button>
          
        </div>
      )
  }
});

render(<Login />, document.getElementById("app"));