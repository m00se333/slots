import React from "react";
import {connect} from "react-redux";

import { chooseTab } from "../../actions/dashActions";

import Caleander from "../minor/Caleander";
import BallotEntry from "../minor/BallotEntry";
import StudentProfile from "../minor/StudentProfile";


const StudentDash = React.createClass({

  updateTabState(button){
    this.props.chooseTab(button);
  },

  tabSelect(){
    
     const {activeTab} = this.props;
     switch(activeTab){

        case "caleander":
          return <Caleander user={this.props.user}/>

        case "ballots":
          return <BallotEntry/>

        case "profile":
          return <StudentProfile/>

        default:
          return <Caleander user={this.props.user}/>
     } 

  },

  render(){
    return(

        <div className="dashContainer">
          <div className="nav">
            <div id="userInfo">
              Hello {this.props.user.username}
            </div>
            <div id="navButtons">
              <button  onClick={() => this.updateTabState("profile")}>Profile</button>
              <button  onClick={() => this.updateTabState("caleander")}>Caleander</button>
              <button  onClick={() => this.updateTabState("ballots")}>Ballot Entry</button>
            </div>
          </div>
          <div className="navFocus">
            {this.tabSelect()}
          </div>
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








