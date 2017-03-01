import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const SignUpForm = React.createClass({

  componentWillMount(){
    this.setState({
      password_passing: null
    })
  },

  passwordCheck(){


        const passwordString = this.password_field.value;

        const hasUpperCase = ((string) =>{
            return(/[A-Z]/.test(string));
        })
        const hasNumber = ((string) =>{
            return (/\d/.test(string));
        })
        const longEnough = ((string)=>{
            const length = string.length

            return (length > 8); 
        })

        if (longEnough(passwordString) === true &&
            hasNumber(passwordString) === true &&
            longEnough(passwordString) === true){
          console.log("we good");
          this.setState({
            password_passing: true
          })
        } else {
          console.log("naw man");
          this.setState({
            password_passing: false
          })
        }
          
  },

  captureForm(e){
      e.preventDefault();  

      const data = {
        givenName: this.first_name_field.value,
        lastName: this.last_name_field.value,
        username: this.username_field.value,
        password: this.password_field.value,
        confirmPass: this.confirm_password_field,
        email: this.email_field.value,
        grade: this.grade_field.value,
        pin: this.pin_field.value
      }

      console.log(data);
  },

  render(){

      return(
            <div className="signUpBox">
             <form className="signUpForm" action="">
                <input id="first" ref={(input) => this.first_name_field = input} type="text" placeholder="first name"/>
                <input ref={(input) => this.last_name_field = input} type="text" placeholder="last name"/>
                <input ref={(input) => this.username_field = input} type="text" placeholder="username"/>
                <CSSTransitionGroup
                                    component="div" 
                                    className="checkField"
                                    transitionName="passCheck"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                    <input ref={(input) => this.password_field = input} type="text" placeholder="password" onChange={this.passwordCheck}/>
                    <div id="status">{}</div>
                </CSSTransitionGroup>
                <input ref={(input) => this.confirm_password_field = input} type="text" placeholder="confirm password"/>
                <input ref={(input) => this.email_field = input} type="text" placeholder="email"/>
                <input ref={(input) => this.grade_field = input} type="text" placeholder="grade"/>
                <input id="last" ref={(input) => this.pin_field = input} type="text" placeholder="school PIN"/>
                <button onClick={this.captureForm}>Register</button>
             </form>
           </div>
        )     

  }
});

export default SignUpForm;