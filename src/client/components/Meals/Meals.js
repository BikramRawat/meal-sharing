import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../contexts/Context";
import DisplayMeals from "../DisplayMeals/DisplayMeals";
import './Meals.css'

const Meals = () => {
  const context = useContext(myContext);
  const [isLoad, setIsLoad] = useState(true);
  const [meals1, setMeals1] = useState([]);
  // console.log("Bikram", meals);

  useEffect(() => {
    fetch("/api/meals")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Somethig went wrong!");
        }
      })
      .then((data) => {
        setMeals1(data);
        setIsLoad(false);
      })
      .catch((error) => {
        context.setIsError(error.message);
        context.setIsLoading(false);
      });
    }, []);
    console.log("render", meals1, isLoad);
  return (
    <div className='display-meals'>
      {/* <DisplayMeals /> */}
      {/* <h1>{meals1[0].title}</h1> */}
      <ul>
        {!isLoad ? (
          meals1.map((meal) => {
            console.log(meal)
            return (
              <li key={meal.id}>
                <p>Item</p>
                <h3 style={{color: 'black'}}>{meal.title}</h3>
                {/* <p>{meal.description}</p> */}
                <Link to={`/meals/${meal.id}`}> Details</Link>
              </li>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </ul>
    </div>
  );
};
export default Meals;
