import React, { useState } from "react";
import { useParams } from "react-router";
import Meals from "../Meals/Meals";

export default function AddReservations(props) {
  // const [reservation, setReservation] = useState("");
  const [contactName, setContactName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [meal, setMeal] = React.useState('');
  const params = useParams();
  // console.log(Number(params.id)[0]);
  // React.useEffect(() => {
  // setMeal(
  //   props.meals.filter((aMeal) => {
  //     return aMeal.id == Number(params.id)[0];
  //   })
  //   );
  // }, []);
  // props.meals.filter((aMeal) => {
  //     return aMeal.id == Number(params.id)[0];
  //   });

  React.useEffect(() => {
    const mealUrl = `http://localhost:5000/api/meals/${params.id}`;
    fetch(mealUrl)
    .then((response)=> response.json())
    .then(data=> setMeal(data))
    
  }, [params.id]);

  const createReservation=(reservation) => {
    console.log('reservation', reservation);
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
          console.log('Success', data);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      meal_id: Number(params.id),
      no_of_guests: numberOfGuests,
      phone_number: phoneNumber,
      contact_name: contactName,
      contact_email_id: email,
      created_date: new Date()
    };
    createReservation(newReservation);
    setContactName("");
    setEmail("");
    setNumberOfGuests(1);
    setPhoneNumber('');
  };

if(!meal){
  return null;
}

  return (
    <>
      <div className="add-reservarions">
        <Meals meals={meal} />
        {/* <div>
          <Link to={`/meals/${meal.id}`}>Book Meal</Link> <br />
          <Link to={`/meals/${meal.id}/reviews`}>View Reviews</Link>
        </div> */}
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact_name">Contact Name</label>
              <input
                type="text"
                id="contact_name"
                value={contactName}
                placeholder="Enter the name ..."
                onChange={(e) => setContactName(e.target.value)}
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
              />
            </div>
            <div>
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter email ..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit">Book Meal</button>
          </form>
        </div>
      </div>
    </>
  );
}
