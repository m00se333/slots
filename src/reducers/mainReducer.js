import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
import { loginStatus, user }from "./userReducer";
import { activeTab } from "./dashReducer";

const rootReducer = combineReducers({ loginStatus, user, activeTab, routing: routerReducer});

export default rootReducer;