import axios from "axios";

export function loginSubmit(username, password){
  
    const hit = axios.post("/login", {username, password});

    return (dispatch) => {

        hit.then(({data}) => {

          if (data.success === false){
            dispatch({type: "LOGIN_ERROR"})
          } else if (data.success === true){
            dispatch({type: "LOGIN_SUCCESS"})
          }

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
  
  const hit = axios.post("/register", {givenName: "optional", surname: "optional", email: "foo@bar.com", password: "1337"});

  return(dispatch) => {

    hit.then(({data}) => {
      console.log(data);
    })
  }
}


