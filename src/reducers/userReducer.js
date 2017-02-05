function userId(state=null, action){
  
  switch(action.type){

      case "HIT":
        console.log(action);
        return {...state, userId: action.username};
  
      default:
        return state;
  }

};

export default userId;