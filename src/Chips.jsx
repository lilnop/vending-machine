import React from 'react';
import {Link} from "react-router-dom";
import chip from "./chip.gif";

function Chips() {
  return (

    <div >
      <h1>CHIPS</h1>
      <img src={chip} alt="chips"/>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Chips;