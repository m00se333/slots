import axios from "axios";

export function loginSubmit(username, password){
  
    const hit = axios.post("/loginUser", {username, password});

    return (dispatch) => {

        hit.then(({data}) => {

          if (data.success === false){
            dispatch({type: "LOGIN_ERROR"})
          } else if (data.success === true){
            dispatch({type: "LOGIN_SUCCESS"})
          }

        console.log(data);

        });
    };
};



export function resetSuccess(){
  return {type: "NAV_AWAY"};
}

export function selectForm(form){
  return {type: "CHOOSE_FORM", form};
}

export function testRegister(){
  
  const hit = axios.post("/registerNewUser", {email: "kitties@kit.com", password: "meowMeow3"})
  return(dispatch) => {

        console.log(dispatch)
        hit.then(({data}) =>{
          console.log(data)
        })
    }
  
  
}


