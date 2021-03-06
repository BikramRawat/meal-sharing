import React from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../contexts/Context";
import "./NavBar.css";

export default function NavBar() {
  const context = React.useContext(myContext);

  const getAvailable = () => {
    return context.state === "" ? context.setState(true) : context.setState("");
  };

  const toggleAvailable =
    context.state === ""
      ? "Click here for Available Reservations"
      : "Display All Meals";

  const deleteVar = () => {
    context.setState("");
    context.setSearchQuery("");
  };

  return (
    <nav className="navbar">
      <ul>
        <Link onClick={deleteVar} to="/">
          <li>Home</li>
        </Link>
      </ul>
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
        <Link onClick={deleteVar} to="/reviews">
          <li>View Top Reviews</li>
        </Link>
      </ul>
      <button className="available_reservations" onClick={getAvailable}>
        {toggleAvailable}
      </button>
    </nav>
  );
}
