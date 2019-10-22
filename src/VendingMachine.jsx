import React from 'react';
import {Link} from "react-router-dom";

/* Importing link to use as navigation      */

function VendingMachine() {
  return (

    <div >
      <h1>VENDINGMACHINE</h1>
      <p>Hello,what would you like to eat from my Vending Machine?</p>

      <Link to="/chips" >Chips</Link>{/* links to various pages      */}
      <Link to="/soda" >Soda</Link>
      <Link to="/sardines" >Sardines</Link>
    </div>
  );
}

export default VendingMachine;