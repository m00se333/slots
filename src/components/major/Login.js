import React from "react";

const Login = React.createClass({


  componentDidUpdate(){
    if (this.props.loginStatus.success === true){
        this.props.router.push("/student/hello");
        console.log("moving...")
    }
  },


  authenticateUser(e){
    e.preventDefault();

    this.props.loginSubmit(this.username_field.value, this.password_field.value)

    this.username_field.value = "";
    this.password_field.value = "";


  },

  render(){

    console.log(this.location)

    return(

        <div className="loginBox">
          <h1>Slots</h1>            
            <input ref={(input) => this.username_field = input} type="text" placeholder="username" />
            <input ref={(input) => this.password_field = input} type="text" placeholder="password" />
            <button onClick={this.authenticateUser}>Login</button>
        </div>
      )
  }
});

export default Login;