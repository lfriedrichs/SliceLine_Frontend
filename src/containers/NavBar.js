import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (

    <div className="navbar">

      <NavLink to="/makePizza">Make Pizza</NavLink>

    </div>

  );
};

export default NavBar;
