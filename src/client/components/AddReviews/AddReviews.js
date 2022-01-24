import React, { useState } from "react";
import { useParams } from "react-router";
import Meals from "../Meals/Meals";
import "./AddReviews.css";
import swal from "sweetalert";

export default function AddReviews(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);
  const [meal, setMeal] = useState("");
  const params = useParams();

  React.useEffect(() => {
    const reviewUrl = `/api/meals/${params.id}`;
    fetch(reviewUrl)
      .then((response) => response.json())
      .then((data) => setMeal(data));
  }, [params.id]);

  const createReview = (review) => {
    const url = "/api/reviews";
    if (review) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
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
    const newReview = {
      meal_id: Number(params.id),
      title: title,
      description: description,
      stars: stars,
      created_date: new Date(),
    };
    createReview(newReview);
    swal("Great!", "Your review is added, Thanks !", "success");
    setTitle("");
    setStars(0);
    setDescription("");
  };

  if (!meal) {
    return null;
  }

  return (
    <>
      <div className="add-reviews">
        <div className="add-review">
          {meal ? <Meals meals={meal} /> : <p>Loading ...</p>}
        </div>
        <div>
          <fieldset className="field_set">
            <legend className="legend">Add Review</legend>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter the review title ..."
                  onChange={(e) => setTitle(e.target.value)}
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
                <label htmlFor="stars">Give Stars</label>
                <input
                  type="number"
                  id="stars"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                  required
                  min="1"
                  max="5"
                />
              </div>
              <button type="submit">Add Review</button>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
}
