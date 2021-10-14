import React from "react";
import { Link } from "react-router-dom";
// import food_item from '../../assets/food_item.png';
import "./Meals.css";

const Meals = (props) => {
  return (
    <div className="meals-details">
      <ul className="display">
        {props.meals.map((meal) => (
          <li key={meal.id}>
            <h3>Meal: {meal.title}</h3>
            <div>
              <img
                src="https://www.wallpapertip.com/wmimgs/54-549498_high-resolution-wallpaper-food.jpg"
                width="260px"
                height="200px"
                alt="foodimage"
              />
            </div>
            <p>Description: {meal.description}</p>
            <p>Location: {meal.location}</p>
            <p>When: {meal.when}</p>
            <p>Price: {meal.price} DKK</p>
            <p>Max Reservations: {meal.max_reservations}</p>
            <p>Created Date: {meal.created_date}</p>
            <div>
              <Link to={`/meals/${meal.id}`}>Book Meal</Link> <br />
              <Link to={`/meals/${meal.id}/reviews`}>View Reviews</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Meals;
