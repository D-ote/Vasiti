import React from "react";
import "./Review.css";

export const Review = ({
  pic = {},
  name = "",
  location = "",
  reviewer = "",
  review = "",
}) => {
  return (
    <div className="review">
      <div className="review-pic">
        <img src={pic} alt="reviewer's profile" />
      </div>
      <div>
        <h5 className="mt-4">{name}</h5>
        <div className="d-flex align-item-center">
          <small>{location}</small>
          <span
            className={`${
              reviewer.toLocaleLowerCase() === "customer" ? "blue" : "green"
            } badge review-badge mb-4 ml-4`}
          >
            {reviewer}
          </span>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};
