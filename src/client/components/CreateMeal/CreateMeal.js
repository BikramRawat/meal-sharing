import React, {useState} from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import moment from 'moment';

export default function CreateMeal() {
  const [title, setTitle] = useState("");
  const [maxReservations, setMaxReservations] = useState();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState();
  const [price, setPrice] = useState();
  const [meal, setMeal] = useState("");
  // const date = moment(new Date()).format("DD-MM-YYYY");

  console.log(typeof Number(maxReservations))

  React.useEffect(() => {
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
        .then((data) => setMeal(data))
        .catch((error) => {
          alert(error);
        });
    }
  }, [meal]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMeal = {
      title: title,
      max_reservations: Number(maxReservations),
      description: description,
      location: location,
      when: when,
      price: price,
      // created_date: date,
    };
    setMeal(newMeal);
    setTitle("");
    setMaxReservations();
    setDescription("");
    setLocation("");
    setWhen();
    setPrice();
  };
  return (
    <div>
      

      <p>Insert the meal data to create a new meal</p>

      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="title">Title</label>
          <input type="text" id="title"  onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title ..." />         
        </div>
        <div>
        <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="max_reservations">Max Reservations</label>
          <input
            type="number"
            id="max_reservations"
            value={maxReservations}
            min="1"
            onChange={(e) => setMaxReservations(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="when">Pick Date</label>
          <input
            type="date"
            id="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
        </div>
        <button type="submit">Create Meal</button>
      </form>
    </div>
  );
}
