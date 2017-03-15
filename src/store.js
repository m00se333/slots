import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";
import {persistStore, autoRehydrate} from "redux-persist";

// root reducer

import rootReducer from "./reducers/mainReducer";


//persisted state


//default state

const defaultState = {

  loginStatus:{

    success: null

  },

  user:{
    username: null,
    email: null,
    grade: null,
    events: []
  },

  activeTab: null

}


export const store = createStore(
                                  rootReducer, 
                                  defaultState, 
                                  compose(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
                                    
                                    )
                                );


export const history = syncHistoryWithStore(browserHistory, store);










