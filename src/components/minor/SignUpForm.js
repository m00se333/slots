import React from "react";

const SignUpForm = React.createClass({

  render(){

      return(
        <div className="signUpWrapper">
            <button className="formSelect" onClick={this.props.renderLogin}  name="login" >Login</button>
            <div className="signUpBox">
             <form className="signUpForm" action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
             </form>
             <div className="inputTitles">
                <span>First Name:  </span>
                <span>Last Name:  </span>
                <span>email:  </span>
                <span>grade:  </span>
                <span>Password:  </span>
                <span>Reconfirm Password:  </span>
             </div>
           </div>
        </div>
        )

  }
});

export default SignUpForm;