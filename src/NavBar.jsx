import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (

    <div >
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/chips" exact>Chips</NavLink>
      <NavLink to="/sardines" exact>Sardines</NavLink>
      <NavLink to="/soda" exact>Soda</NavLink>
    </div>
  );
}

export default NavBar;