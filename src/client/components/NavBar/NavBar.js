import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { availableContext } from "../../contexts/availableContext";

export default function NavBar() {
  const context= React.useContext(availableContext);

const getAvailable = ()=> {
  return context.state === '' ? context.setState(true): context.setState('');
}

const toggleAvailable = context.state === ''? 'Available Reservations Only' : 'All Meals';

const deleteVar= ()=> {
  context.setState('');
  context.setSearchQuery('');

}

  return (
    <nav className="navbar">
      <Link onClick={deleteVar} to="/">
        <li>Home</li>
      </Link>
      <ul>
        <Link onClick={deleteVar} to="/meals">
          <li>Meals</li>
        </Link>
        <Link onClick={deleteVar} to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link onClick={deleteVar} to="/create-meal">
          <li>Create Meal</li>
        </Link>
        {/* <Link to="/search-meal">
          <li>Create Meal</li>
        </Link> */}

        <button onClick={getAvailable}>{toggleAvailable}</button>
      </ul>
    </nav>
  );
}
