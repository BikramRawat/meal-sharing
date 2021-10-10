import React, { useState } from "react";
import { useParams } from "react-router";

export default function AddReservations(props) {
  const [reservation, setReservation] = useState([]);
  const params = useParams();
  const meal = props.meals.filter((aMeal) => aMeal.id == Number(params.id)[0]);
  return (
    <>
      <div className="add-reservarions">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
        <div>
          <button onClick={(e) => setReservation(e.target.value)}>
            Reserve
          </button>
        </div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <div>
            <input type='text' placeholder='Enter name ...' />
            <label>Name</label>
            </div>
            <div>
                <input type='mail' placeholder='Enter email ...' />
                <label>Email</label>
            </div>
        </form>
      </div>
    </>
  );
}
