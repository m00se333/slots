import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
import { loginStatus, loginForm }from "./userReducer";

const rootReducer = combineReducers({ loginStatus, loginForm, routing: routerReducer});

export default rootReducer;