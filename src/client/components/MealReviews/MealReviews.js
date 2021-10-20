import React from "react";
import "./MealReviews.css";

const Reviews = (props) => {
  return (
    <div className="reviews-details">
      <ul className="display">
        {props.reviews.map((review) => (
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
            <p>
              <span>Description:</span> {review.description}
            </p>
            <p>
              <span>Stars:</span> {review.stars} / 5{" "}
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
