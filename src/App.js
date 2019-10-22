import React from 'react';
import './App.css';
// {/* importing react rout and switch to use      */}
import {Route,Switch} from "react-router-dom"; 
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";

function App() {
  return (

    <div className="App">  
      <NavBar/> {/* Navbar compo      */}
      <Switch>    {/* Wrapping everything in switch to make sure one compo displays      */}
        <Route path="/" component={VendingMachine} exact/> {/* showing vartious compo to route      */}
        <Route path="/chips" component={Chips} exact/>
        <Route path="/sardines" component={Sardines} exact/>
        <Route path="/soda" component={Soda} exact/>
      </Switch>{/* closing switch      */}
      
      
    </div>
  );
}

export default App;
