import axios from "axios";
import { push } from "react-router-redux";

export function loginSubmit(username, password){
  
    const hit = axios.post("/authenticateUser", {username, password});

    return(dispatch) => { // throwing an error so I included it
        
        hit.then(({data}) => {
          
            if (data.access_token){
              getUserData(data.access_token)(dispatch);
            } else {
              console.log("error");
            }

        });
    }
  
};

const getUserData = (access_token) => (dispatch) => {
    const hit = axios.post("/getUser", {token: access_token})
    .then(response => {

        
        
        console.log(response.data);

        dispatch(loginSucceeded(response.data));
        
        dispatch(push(`/student/${response.data.name}`));
        
    });
  }


const loginSucceeded = (user) =>({
  type: "USER_DATA_POPULATE",
  payload: user
})

//auth0
export function registerSubmit(data){

    const route = axios.post("/registerNewUser", data)

    .then(response =>{

    });
}


