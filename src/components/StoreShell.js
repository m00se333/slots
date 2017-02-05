import React from "react";

const StoreShell = React.createClass({

    render(){

        return(

            <div className="theBigWrapper">
              {React.cloneElement(this.props.children, this.props)}
            </div>

          )

    }
})

export default StoreShell;