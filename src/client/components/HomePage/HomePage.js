import React from "react";
import { myContext } from "../../contexts/Context";
// import "./HomePage.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Meals from "../Meals/Meals";
// import food_item from '../../assets/food_item.png';


export default function HomePage(props) {
  
  const meals = React.useContext(myContext);

  return (
    <>
      {/* <Header />
      <NavBar /> */}
      <img src='https://wallpaperaccess.com/full/3014609.jpg' height='400px' width='100%' />
      
      {/* <div className="home-page">
        <h2>Available Meals</h2>
        {props.meals.map((meal) => (
        <ul key={meal.id}>
            <li >
              <img src='../../assets/food_item.png' width='80px' height='100px' alt='food_item' />
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <p>{meal.price}</p>
              <div>
                <Link to={`/meals/${meal.id}`}>Book Meal</Link> <br />
                <Link to={`/meals/${meal.id}/reviews`}>View Reviews</Link>
              </div>
            </li>
            </ul>
          ))}
        
      </div> */}
      <Meals meals={meals} />
      {/* <Footer /> */}
    </>
  );
}
