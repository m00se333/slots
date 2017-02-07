export function loginStatus(state=null, action){
  
  switch(action.type){

      case "LOGIN_SUCCESS":
        console.log(action);
        return {...state, success: true};

      case "LOGIN_ERROR":
        console.log(action);
        return {...state, success: false};
  
      default:
        return state;
  }

};

export function userInfo(state=null, action){

  switch(action.type){

      default:
        return state;
  }
}
