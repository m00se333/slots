export function loginStatus(state=null, action){
  
  switch(action.type){

      case "HIT":
        console.log(action);
        return {...state, success: true};
  
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
