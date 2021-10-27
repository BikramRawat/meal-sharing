import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <div className="heading" id="top">
    
      <Link to="/">
      <img src={logo} width="150px" height="100px" alt="logo" />
      </Link>
      
      <p>Meal Sharing App @ HYF</p>
    </div>
  );
}
