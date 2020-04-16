import React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import '../index.css';
const NavBar = () => {
  return (

    <div className="navbar">
<Badge  className="lope">
      <NavLink className="donty" to="/makePizza">Make Pizza</NavLink>     </Badge>
     


      

    </div>

  );
};

export default NavBar;
