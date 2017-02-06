import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
import { loginStatus, userInfo }from "./userReducer";

const rootReducer = combineReducers({ loginStatus, userInfo, routing: routerReducer});

export default rootReducer;