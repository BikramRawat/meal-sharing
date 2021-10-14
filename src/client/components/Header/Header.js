import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <div className="heading">
      <img src={logo} width="150px" height="100px" alt="logo" />
      <p>Meal Sharing App @ HYF</p>
    </div>
  );
}
