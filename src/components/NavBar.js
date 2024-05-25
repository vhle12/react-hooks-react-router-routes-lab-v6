import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>
      <NavLink 
        to="/directors" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Directors
      </NavLink>
      <NavLink 
        to="/actors" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;