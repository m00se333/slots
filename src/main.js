import React from "react";
import {render} from "react-dom";

//css
import "./stylesheets/styles.css";

//components
import Login from "./components/major/Login";
import App from "./components/App";
import NotFound from "./components/minor/NotFound";
import StudentDash from "./components/major/StudentDash";

//test
import Register from "./components/major/Register";



// Router dependencies
import { Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from "react-stormpath";

//store
import { store,  history} from "./store.js";


const router = (

  <Provider store={store}>
      <Router history={history}>
        <HomeRoute path="/" component={App}>
          <IndexRoute component={Login}></IndexRoute>
          <Route path="/register" component={Register}></Route>
          <Route path="/student/:id" component={StudentDash}></Route>
        </HomeRoute>
      </Router>
  </Provider>

)

render(router, document.getElementById("app"));