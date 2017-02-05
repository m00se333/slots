import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
import userId from "./userReducer";

const rootReducer = combineReducers({ userId, routing: routerReducer});

export default rootReducer;