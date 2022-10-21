import React from "react";
import "./card.css";
import "../../logements.json";

const Card = (props) => {
  const useCard = (props) => {
    return {
      ...props,
    };
  };
  const h = useCard(props);

  return (
    <ul>
      <li>
        <div className="card">
          <div>
            <img
              src={h.cardImage}
              alt={`${h.cardTitle}`}
              className="card-image"
            />
          </div>

          <h2 className="card-title">{h.cardTitle}</h2>
        </div>
      </li>
    </ul>
  );
};

export default Card;
