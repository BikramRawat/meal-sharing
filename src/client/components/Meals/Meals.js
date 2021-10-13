import React from "react";
// import Header from "../Header/Header";
// import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import food_item from '../../assets/food_item.png';
import './Meals.css';

const Meals = (props) => {
  return (
    <div className='meals-details'>
      {/* <Header />
      <NavBar /> */}
      <ul className='display'>
        {props.meals.map((meal) => (
          <li key={meal.id}>
            <h3>Meal: {meal.title}</h3>
            <div><img src='https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg' width='150px' height='150px' alt='foodimage'/></div>
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
      {/* <Footer /> */}
    </div>
  );
};
export default Meals;
