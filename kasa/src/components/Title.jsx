import React from "react";
import "../styles/title.css";
import { logementsList } from "../data.js";
import { useParams } from "react-router-dom";

const Title = () => {
  const params = useParams();
  const logementId = params.id;
  console.log(params);
  console.log(logementId);

  return (
    <div className="title">
      {logementsList
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <div key={logementFiltre}>
            <h1 className="title">{logementFiltre.title}</h1>
            <p className="location">{logementFiltre.location}</p>
          </div>
        ))}
    </div>
  );
};

export default Title;
