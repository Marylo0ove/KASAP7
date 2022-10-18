import React from "react";
import "../styles/card.css";
import { logementsList } from "../data.js";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <ul className="list">
      {logementsList.map((logement) => (
        <li key={logement.id}>
          <Link to={`/FicheLogement/${logement.id}`}>
            <div className="card">
              <div>
                <img
                  src={logement.cover}
                  alt={`${logement.tags}`}
                  className="card-image"
                />
              </div>
              <div className="card-subtitle">
                <h2 className="card-title">{logement.title}</h2>
              </div>
              <span className="degrade"></span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;
