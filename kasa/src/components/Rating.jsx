import React from "react";
import "../styles/rating.css";
import { logementsList } from "../data";
import redstar from "../assets/star_rate-24-red.svg";
import greystar from "../assets/star_rate-24-grey.svg";

const Stars = ({ rateValue, rateType }) => {
  const range = [1, 2, 3, 4, 5];
  const starColor =
    rateType ===
    "rating"(
      <img src={redstar} alt="étoile de notation rouge" className="rating" />
    );

  return (
    <div>
      {range.map((rangeElement) => (
        <span key={rangeElement.toString()}>{starColor}</span>
      ))}
    </div>
  );
};

function Rating({ rating }) {
  return (
    <div>
      <Stars scaleType="rating" rateValue={rating} />
    </div>
  );
}

export default Rating;
