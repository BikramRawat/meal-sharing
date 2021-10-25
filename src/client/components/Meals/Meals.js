import React from "react";
import { Link } from "react-router-dom";
// import food_item from '../../assets/food_item.png';
import "./Meals.css";

// const availableReservations = ()=> {
//   return meal.max_reservations - meal.booked_reservations;
// }


const Meals = (props) => {
  return (
    <div className="meals-details">
      <ul className="display">
        {props.meals.map((meal) => (
          <li key={meal.id}>
            <h3>Meal: {meal.title}</h3>
            <div>
              <img
                src="https://previews.123rf.com/images/olgastrelnikova/olgastrelnikova1910/olgastrelnikova191000023/132599209-food-sharing-project-vector-illustration-of-share-meal-waste-reduction-giving-helping-hand-for-the-p.jpg"
                width="260px"
                height="200px"
                alt="foodimage"
              />
            </div>
            <p id='description-field'>
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
            <p>
            <span>Available Reservations:</span>
              {/* <span>Available Reservations:</span> {availableReservations} */}
            </p>
            <div className="links-bookmeal-reviews">
              <Link to={`/meals/${meal.id}`}>Book Meal</Link> <br />
              <Link to={`/meals/${meal.id}/reviews`}>Add Review</Link> <br/>
              <Link to={`/reviews/${meal.id}`}>View Review for this Meal</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Meals;
