import React from "react";

const BallotEntry = ({}) =>(

  <div className="ballotWrapper">
    <form className="ballotEntryForm">
      <input type="text" placeholder="tournament"/>
      <input type="text" placeholder="event"/>
      <input type="text" placeholder="round"/>
      <input type="text" placeholder="rank"/>
    </form>
  </div>


  )

export default BallotEntry;