import React from "react";
import {connect} from "react-redux";

const StudentDash = React.createClass({

  render(){
    return(

        <div className="dashContainer">
          <div className="nav">
            <div id="userInfo">
              Hello {this.props.user.username}
            </div>
            <div id="navButtons">
              <div>Caleander</div>
              <div>Profile</div>
            </div>
          </div>
          <div className="navFocus"></div>
        </div>

      )
  }

});

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(StudentDash);