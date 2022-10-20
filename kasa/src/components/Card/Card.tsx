import React from "react";
import "./card.css";
import "../../logements.json";
import { useCard } from "./Card.hook.tsx";

export interface CardProps {
  cardTitle?: string;
  cardImage: string;
}
const Card = (props: CardProps) => {
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
