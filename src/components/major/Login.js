import React from "react";

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

export default Login;