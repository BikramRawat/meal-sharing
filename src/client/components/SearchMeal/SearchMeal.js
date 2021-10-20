import React from "react";
import { availableContext } from "../../contexts/availableContext";
import "./SearchMeal.css";

export default function SearchMeal() {
  const context = React.useContext(availableContext);
  return (
    <div className="search-meal">
      <h2> Please Enter the Meal title you want to search .... </h2> <br />
      <input
        type="search"
        placeholder="Search meal ..."
        value={context.searchQuery}
        onChange={(e) => {
          context.setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}
