import React, { useState } from "react";
import { useParams } from "react-router";
import Meals from "../Meals/Meals";
import "./AddReservations.css";
import swal from "sweetalert";

export default function AddReservations(props) {
  // const [reservation, setReservation] = useState("");
  const [contactName, setContactName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [meal, setMeal] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    const mealUrl = `http://localhost:5000/api/meals/${params.id}`;
    fetch(mealUrl)
      .then((response) => response.json())
      .then((data) => setMeal(data));
  }, [params.id]);

  console.log("meal", meal);

  const createReservation = (reservation) => {
    console.log("reservation", reservation);
    const url = "http://localhost:5000/api/reservations";
    if (reservation) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success", data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      meal_id: Number(params.id),
      no_of_guests: Number(numberOfGuests),
      phone_number: Number(phoneNumber),
      contact_name: contactName,
      contact_email_id: email,
      created_date: new Date(),
    };
    createReservation(newReservation);
    swal("Enjoy your meal !", "meal reservation is completed", "success");
    setContactName("");
    setEmail("");
    setNumberOfGuests(1);
    setPhoneNumber("");
  };

  if (!meal) {
    return null;
  }

  return (
    <>
      <div className="add-reservarions">
        <div className="book-meal">
          {meal ? <Meals meals={meal} /> : <p>Loading ...</p>}
        </div>
        <div>
          <fieldset className="field_set">
            <legend className="legend">Book Meal</legend>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact_name">Contact Name</label>
                <input
                  type="text"
                  id="contact_name"
                  value={contactName}
                  placeholder="Enter the name ..."
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="no_of_guests">Number Of Guests</label>
                <input
                  type="number"
                  id="no_of_guests"
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  min="1"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="tel"
                  id="phone_number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Contact Email</label>
                <input
                  type="email"
                  id="contact_email_id"
                  value={email}
                  placeholder="Enter email ..."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Book Meal</button>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
}
