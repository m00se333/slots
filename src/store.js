import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";

// root reducer

import rootReducer from "./reducers/mainReducer";

//default state

const defaultState = {

  loginStatus:{

    success: null,
    access_token: null

  },

  user:{
    username: null,
    email: null,
    grade: null,
    events: []
  }

}

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)));

export const history = syncHistoryWithStore(browserHistory, store);