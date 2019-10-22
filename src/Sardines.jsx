import React from 'react';
import {Link} from "react-router-dom";
import sardine from "./sardines.gif";

function Sardines() {
  return (

    <div >
      <h1>SARDINES</h1>
      <img src={sardine} alt="sardine"/>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Sardines;