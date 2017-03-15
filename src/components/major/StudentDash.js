import React from "react";
import {connect} from "react-redux";

import { chooseTab } from "../../actions/dashActions";

const StudentDash = React.createClass({

  handleTabChange(button){
    this.props.chooseTab(button);
  },

  render(){
    return(

        <div className="dashContainer">
          <div className="nav">
            <div id="userInfo">
              Hello {this.props.user.username}
            </div>
            <div id="navButtons">
              <button  onClick={() => this.handleTabChange("profile")}>Profile</button>
              <button  onClick={() => this.handleTabChange("caleander")}>Caleander</button>
              <button  onClick={() => this.handleTabChange("ballots")}>Ballot Entry</button>
            </div>
          </div>
          <div className="navFocus"></div>
        </div>

      )
  }

});

const mapStateToProps = (state) => {
  return{
    user: state.user,
    activeTab: state.activeTab
  }
};
const mapDispatchToProps =  {
  chooseTab
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDash);