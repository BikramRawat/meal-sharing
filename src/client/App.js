import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meals from "./components/Meals/Meals";
import HomePage from "./components/HomePage/HomePage";
import AddReservations from "./components/AddReservations/AddReservations";
import MealReviews from "./components/MealReviews/MealReviews";
import CreateMeal from "./components/CreateMeal/CreateMeal";
import AboutUs from "./components/AboutUs/AboutUs";
import Page404 from "./components/Page404";
import { myContext } from "./contexts/Context";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));

    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <myContext.Provider value={meals}>
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/meals">
          <Meals meals={meals} src='../../assets/food_item.jpg' />
        </Route>
        <Route exact path={`/meals/:id`}>
          <AddReservations meals={meals} />
        </Route>
        <Route exact path={`/meals/:id/reviews`}>
          <MealReviews meals={meals} />
        </Route>
        <Route exact path="/create-meal">
          <CreateMeal />
        </Route>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/">
          <HomePage meals={meals} reviews={reviews} />
        </Route>
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
    // </myContext.Provider>
  );
}

export default App;
