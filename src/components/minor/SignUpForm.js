import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const SignUpForm = React.createClass({

  componentWillMount(){
    this.setState({
      password_passing: false,
      password_matching: false,
      validForm: false
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

  passwordMatch(){
    const password = this.password_field.value;
    const confirmPassword = this.confirm_password_field.value;

    if (password === confirmPassword){
      this.setState({
        password_matching: true
      })
    } else if (password !== confirmPassword) {
      this.setState({
        password_matching: false
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
        confirmPass: this.confirm_password_field.value,
        email: this.email_field.value,
        grade: this.grade_field.value,
        pin: this.pin_field.value
      }

      console.log(data);
  },

  validateForm(){

      const {password_passing, password_matching} = this.state;

      const allInputs = []
      
      const formInputs = [].slice.call(this.register_form.children)

      formInputs.forEach(function(child){
        
          if(child.className === "checkField"){
            allInputs.push(child.firstChild);
          } else if (child.tagName === "INPUT" && child.value !== ""){
            allInputs.push(child);
          }

        });

      console.log(formInputs.length);

      if(formInputs.length === 8 && password_passing === true && password_matching === true){
        this.setState({
          validForm: true
        })
      } else {
        this.setState({
          validForm: false
        })
      }


     
  },

  hitApi(e){
    e.preventDefault();
    this.props.testRegister();
  },

  render(){

      const completeRegistration = this.state.validForm === true ? <button ref={(input) => this.register_button = input} onClick={this.captureForm}>Register</button> : null;

      return(
            <div className="signUpBox">
             <form className="signUpForm" ref={(input) => this.register_form = input}>
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
                <input ref={(input) => this.confirm_password_field = input} type="text" placeholder="confirm password" onChange={this.passwordMatch}/>
                <input ref={(input) => this.email_field = input} type="text" placeholder="email"/>
                <input ref={(input) => this.grade_field = input} type="text" placeholder="grade"/>
                <input id="last" ref={(input) => this.pin_field = input} type="text" placeholder="school PIN"/>
                <CSSTransitionGroup 
                                    component="div"
                                    className="registerButton"
                                    transitionName="registerCheck"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                {completeRegistration}
                </CSSTransitionGroup>
             </form>
           </div>
        )     

  }
});

export default SignUpForm;