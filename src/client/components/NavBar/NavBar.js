import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
       <Link to="/">
            <li>Home</li>
          </Link>
      
        <ul>
         
          <Link to="/meals">
            <li>Meals</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/create-meal">
            <li>Add Meal</li>
          </Link>
        </ul>

    </nav>
  );
}
