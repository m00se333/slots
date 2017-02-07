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