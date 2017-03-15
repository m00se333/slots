import axios from "axios";
import { push } from "react-router-redux";

export function loginSubmit(username, password){
  
    const hit = axios.post("/loginUser", {username, password});

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


export function testRegister(){
  
  const hit = axios.post("/registerNewUser", {email: "kitties@kit.com", password: "meowMeow3"})
  return(dispatch) => {

        console.log(dispatch)
        hit.then(({data}) =>{
          console.log(data)
        })
    }
  
  
}


const getUserData = (access_token) => (dispatch) => {
    const hit = axios.post("/getUser", {token: access_token})
    .then(response => {

        const {account} = response.data
        console.log(dispatch)
        dispatch(loginSucceeded(account));
        console.log(account);
        dispatch(push(`/student/${account.username}`));
    });
  }


const loginSucceeded = (user) =>({
  type: "USER_DATA_POPULATE",
  payload: user
})


