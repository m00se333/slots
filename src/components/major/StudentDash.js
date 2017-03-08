import React from "react";
import {connect} from "react-redux";

const StudentDash = React.createClass({

  render(){
    return(

        <div className="dashContainer">
          <div className="nav">
            <h2>Hello {this.props.user.username}</h2>
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