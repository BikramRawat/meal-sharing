import React from "react";
import { myContext } from "../../contexts/Context";
// import "./HomePage.css";
import Meals from "../Meals/Meals";
import SearchMeal from '../SearchMeal/SearchMeal';
// import food_item from '../../assets/food_item.png';

export default function HomePage(props) {
  const meals = React.useContext(myContext);

  return (
    <>
      <img
        src="https://wallpaperaccess.com/full/3014609.jpg"
        height="400px"
        width="100%"
      />
      <SearchMeal />
      <Meals meals={meals} />
    </>
  );
}
