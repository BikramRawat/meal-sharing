import React from "react";
import { myContext } from "../../contexts/Context";
// import "./HomePage.css";
import Meals from "../Meals/Meals";
import SearchMeal from "../SearchMeal/SearchMeal";
import MealReviews from "../MealReviews/MealReviews";
// import food_item from '../../assets/food_item.png';

export default function HomePage(props) {
  const {meals, reviews} = React.useContext(myContext);
 

  return (
    <>
      <img
        src="https://wallpaperaccess.com/full/3014609.jpg"
        height="400px"
        width="100%"
      />
      <SearchMeal />
      <Meals meals={meals} />
      <h3>Have a look over Meal Reviews:</h3>
      <hr />
      <MealReviews reviews={reviews} />
    </>
  );
}
