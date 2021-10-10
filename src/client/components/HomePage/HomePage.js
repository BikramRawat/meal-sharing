import React, { useState, useContext } from "react";
import { myContext } from "../../contexts/Context";
import DisplayMeals from "../DisplayMeals/DisplayMeals";
import "./HomePage.css";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  console.log("in homepage", searchText);

  const meals = useContext(myContext);

  return (
    <div className="home-page">
      <div className="home-serach">
        <input
          type="search"
          placeholder="Enter the meal you want to search ..."
          value={meals.searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <DisplayMeals />
    </div>
  );
}
