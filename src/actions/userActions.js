import axios from "axios";

export function loginUser(username){
  
    const hit = axios.post("/login", {data: username});

    return (dispatch) => {

        hit.then(({data}) => {
          dispatch({ type: "HIT", username});
          console.log(data);
        });
    };
};