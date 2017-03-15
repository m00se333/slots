export function activeTab(state={}, action){


    switch(action.type){

        case "PROFILE":
          
          return action.type.toLowerCase()

        case "CALEANDER":
         
          return action.type.toLowerCase()
        case "BALLOTS":
          
          return action.type.toLowerCase()
        
        default:
          return state;
    }

};