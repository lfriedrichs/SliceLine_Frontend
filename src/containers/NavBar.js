import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import PizzaSlap from './PizzaSlap';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const NavBar = () => {
  return (
    
    <div className="navbar">
      {/*{code here}*/}
      
      <NavLink to="/Pizza">PizzaSlap</NavLink>
      
    </div>
   
  );
};

export default NavBar;
