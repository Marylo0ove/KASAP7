import React from "react";
import "../styles/rating.css";
import redstar from "../assets/star_rate-24-red.svg";
import greystar from "../assets/star_rate-24-grey.svg";

const Rating = ({ rateValue, rateType }) => {
  const range = [1, 2, 3, 4, 5];
  const starColor =
    rateType === "rating" ? (
      <img src={redstar} alt="étoile de notation rouge" className="rating" />
    ) : (
      <img src={greystar} alt="étoile de notation grise" className="rating" />
    );

  return (
    <div>
      {range.map((rangeElement) =>
        rateValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{starColor}</span>
        ) : null
      )}
    </div>
  );
};

export default Rating;
