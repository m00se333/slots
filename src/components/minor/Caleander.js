import React from "react";
import axios from "axios"

const Caleander = React.createClass({

componentWillMount(){

  // const user = "kimchi";

  // axios.post("/caleanderPopulate", {user});

},


render(){

  return(

        <div className="caleanderWrapper">
            <div id="mon" className="caleander_day">
                <span>mon</span>
            </div>
            <div id="tues" className="caleander_day">
                <span>tues</span>
            </div>
            <div id="wed" className="caleander_day">
                <span>wed</span>
            </div>
            <div id="thurs" className="caleander_day">
                <span>thurs</span>
            </div>
            <div id="fri" className="caleander_day">
                <span>fri</span>
            </div>
            <div id="sat" className="caleander_day">
                <span>sat</span>
            </div>
            <div id="sun" className="caleander_day">
                <span>sun</span>
            </div>
        </div>

        )
      }
  });

export default Caleander;