import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/userActions.js";

import StoreShell from "./StoreShell.js";

function mapStateToProps(state){
  return{
    userId: state.userId
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(StoreShell);

export default App;