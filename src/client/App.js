import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Meals from "./components/Meals/Meals";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import AddReservations from "./components/AddReservations/AddReservations";
import MealReviews from "./components/MealReviews/MealReviews";
import CreateMeal from "./components/CreateMeal/CreateMeal";
import { myContext } from "./contexts/Context";

function App() {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    // setIsLoading(true);
    setMeals([]);
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setIsLoading(false);
  }, []);

  const mealsContextValues = {
    meals,
    setMeals,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    reviews,
    setReviews,
    searchText,
    setSearchText,
  };

  return (
    <myContext.Provider value={mealsContextValues}>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/meals" component={Meals} />
          {/* <Meals meals={meals} />
          </Route> */}
          <Route exact path="/aboutus" component={AboutUs} />

          <Route exact path={`/meals/:id`} component={AddReservations} />

          <Route exact path={`/meals/:id/reviews`} component={MealReviews} />

          <Route exact path="/create-meal" component={CreateMeal} />

          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </myContext.Provider>
  );
}

export default App;
