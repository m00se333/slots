import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";

// root reducer

import rootReducer from "./reducers/mainReducer";

//default state

const defaultState = {

  userId: null

}

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);