export function loginStatus(state={}, action){
  
  switch(action.type){

      case "LOGIN_SUCCESS":
        console.log(action);

        const {success, access_token} = action.payload;

        return {success: success, access_token: access_token}

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
  
        return action.form;


      default:
        return state;
  }
}
