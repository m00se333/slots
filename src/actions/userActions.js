import axios from "axios";

export function loginSubmit(username, password){
  
    const hit = axios.post("/login", {username, password});

    return (dispatch) => {

        hit.then(({data}) => {
          dispatch({ type: "HIT", success:true});
          console.log(data);
        });
    };
};