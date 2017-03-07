import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
import { loginStatus, user }from "./userReducer";

const rootReducer = combineReducers({ loginStatus, user, routing: routerReducer});

export default rootReducer;