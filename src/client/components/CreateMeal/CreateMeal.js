import React, { useState } from "react";
// import moment from 'moment';
import './CreateMeal.css';
import swal from "sweetalert";

export default function CreateMeal() {
  const [title, setTitle] = useState("");
  const [maxReservations, setMaxReservations] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState('');
  const [price, setPrice] = useState(0);
  // const [meal, setMeal] = useState("");
  // const date = moment(new Date()).format("DD-MM-YYYY");

  console.log(typeof Number(maxReservations));

  const createMeal= (meal) => {
    const url = "http://localhost:5000/api/meals";
    if (meal) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success", data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMeal = {
      title: title,
      maxReservations: Number(maxReservations),
      description: description,
      location: location,
      when: when,
      price: price,
      created_date: new Date(),
    };
    createMeal(newMeal);
    swal("Good Job !", "New meal is created", "success");
    setTitle("");
    setMaxReservations(0);
    setDescription("");
    setLocation("");
    setWhen('');
    setPrice(0);
  };
  return (
    <div className='create_meal'>
      <fieldset className='field_set'>
        <legend className='legend'>Create Meal</legend>
      <p>Insert the meal data to create a new meal</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title ..."
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="max_reservations">Max Reservations</label>
          <input
            type="number"
            id="max_reservations"
            value={maxReservations}
            min="1"
            max='10'
            onChange={(e) => setMaxReservations(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="when">Pick Date</label>
          <input
            type="date"
            id="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Meal</button>
      </form>
      </fieldset>
    </div>
  );
}
