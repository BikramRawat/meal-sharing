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
            <p>
              <span>Description:</span> {meal.description}
            </p>
            <p>
              <span>Location:</span> {meal.location}
            </p>
            <p>
              <span>When:</span> {meal.when}
            </p>
            <p>
              <span>Price:</span> {meal.price} DKK
            </p>
            <p>
              <span>Max Reservations:</span> {meal.max_reservations}
            </p>
            <p>
              <span>Created Date:</span> {meal.created_date}
            </p>
            <div className="links-bookmeal-reviews">
              <Link to={`/meals/${meal.id}`}>Book Meal</Link> <br />
              <Link to={`/meals/${meal.id}/reviews`}>Add Review</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Meals;
