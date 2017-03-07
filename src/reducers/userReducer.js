export function loginStatus(state={}, action){

  
  
  switch(action.type){

      case "LOGIN_SUCCESS":
        const {success, access_token} = action.payload;
        return {success: success, access_token: access_token}

      case "LOGIN_ERROR":
        
        return {success: success, access_token: null}
  

      default:
        return state;
  }

};


export function user(state={}, action){
    
    

    switch(action.type){

      case "USER_DATA_POPULATE":
        console.log(action)
        const {email, username} = action.payload;
        return {...state, email: email, username: username}

      case "USER_DATA_POPULATE_ERROR":

        return state;

      default:
        return state;
    }
}
