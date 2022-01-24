import React from "react";
import "./MealReviews.css";
import { useParams } from "react-router-dom";

const Reviews = (props) => {
  const { id } = useParams();
  // console.log(id, props.reviews);
  const reviewToDisplay =
    id === undefined
      ? props.reviews.filter((review) => review.stars > 3)
      : props.reviews.filter((review) => review.meal_id === Number(id));
  return (
    <div className="reviews-details">
      <ul className="display">
        {reviewToDisplay.map((review) => (
          <li key={review.id}>
            <h3>Review Title: {review.title}</h3>
            <div>
              <img
                src="https://wallpaperaccess.com/full/1330758.jpg"
                width="200px"
                height="150px"
                alt="thanksimage"
              />
            </div>
            <p id= 'description-field'>
              <span>Description:</span> {review.description}
            </p>
            <p>
              <span>Stars:</span>
              {Array(review.stars).fill("★").join(" ")}
            </p>
            <p>
              <span>Created Date:</span> {review.created_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
