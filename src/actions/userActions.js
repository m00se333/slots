import axios from "axios";

export function loginSubmit(username, password){
  
    const hit = axios.post("/loginUser", {username, password});

    return (dispatch) => {

        hit.then(({data}) => {

          if (data){
            dispatch({type: "LOGIN_SUCCESS",
                      payload: {
                        success: true,
                        access_token: data.access_token
                      }})
          
          } else if (!data){
            dispatch({type: "LOGIN_ERROR"})
      
          }

        });
    };
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

export function getUserData(token){
  const hit = axios.post("/getUser", {token: token});

  return(dispatch) => {

      hit.then(({data}) => {
        console.log(data);
      })
  }
}


