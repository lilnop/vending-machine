import React from 'react';
import {Link} from "react-router-dom";
import soda from "./soda.gif";

function Soda() {
  return (

    <div >
      <h1>SODA</h1>
      <img src={soda} alt="soda"/>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Soda;