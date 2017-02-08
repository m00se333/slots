export function loginStatus(state={}, action){
  
  switch(action.type){

      case "LOGIN_SUCCESS":
        console.log(action);
        return {...state, success: true};

      case "LOGIN_ERROR":
        console.log(action);
        return {...state, success: false};

      case "NAV_AWAY":
        console.log(action);
        return {...state, success: null};
          
      default:
        return state;
  }

};

export function loginForm(state=null, action){

  switch(action.type){

      case "CHOOSE_FORM":
  
        return {...state, loginForm: action.form };


      default:
        return state;
  }
}
