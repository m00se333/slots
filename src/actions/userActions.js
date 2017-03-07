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

// export function getUserData(token){
//   const hit = axios.post("/getUser", {token: token});

//   return(dispatch) => {

//       hit.then(({data}) => {
//           console.log(data);
//           const {email, username} = data.account

//           if(data){
//             dispatch({type: "USER_DATA_POPULATE",
//                       payload: {
//                         email: email,
//                         username: username
//                       }})
//           } else if (!data){
//             dispatch({type: "USER_DATA_POPULATE_ERROR"})
//           }
//       })
//   }
// }


const getUserData = (access_token) => (dispatch) => {
    const hit = axios.post("/getUser", {token: access_token})
    .then(response => {

        const {account} = response.data

        //dispatch(loginSucceeded(response.user));
        console.log(account);
        dispatch(push(`/student/${account.username}`));
    });
  }



