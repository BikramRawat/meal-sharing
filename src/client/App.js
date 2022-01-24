import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meals from "./components/Meals/Meals";
import HomePage from "./components/HomePage/HomePage";
import AddReservations from "./components/AddReservations/AddReservations";
import MealReviews from "./components/MealReviews/MealReviews";
import CreateMeal from "./components/CreateMeal/CreateMeal";
import AboutUs from "./components/AboutUs/AboutUs";
import Page404 from "./components/Page404";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddReviews from "./components/AddReviews/AddReviews";
import { myContext } from "./contexts/Context";

function App() {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [state, setState] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`/api/meals?availableReservations=${state}&title=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setMeals(data));

      // console.log(meals);

    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [state, searchQuery]);

  const contextValues = {
    meals,
    state,
    setState,
    searchQuery,
    setSearchQuery,
    reviews,
    setReviews,
  };

  return (
    <myContext.Provider value={contextValues}>
      <Router>
        <Header />
          <NavBar />
          <Switch>
            <Route exact path="/meals">
              <Meals meals={meals} />
            </Route>
            <Route exact path="/reviews">
              <MealReviews reviews={reviews} />
            </Route>
            <Route exact path={`/reviews/:id`}>
              <MealReviews reviews={reviews} />
            </Route>
            <Route exact path={`/meals/:id`}>
              <AddReservations meals={meals} />
            </Route>
            <Route exact path={`/meals/:id/reviews`}>
              <AddReviews meals={meals} />
            </Route>
            <Route exact path="/create-meal">
              <CreateMeal />
            </Route>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*" component={Page404} />
          </Switch>
        <Footer />
      </Router>
    </myContext.Provider>
  );
}

export default App;
