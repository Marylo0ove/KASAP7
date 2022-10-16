import React from "react";
import "../styles/title.css";
import { logementsList } from "../data.js";
import { useParams } from "react-router-dom";

const Title = () => {
  const params = useParams();
  const logementId = JSON.stringify(params);
  return (
    <div className="title">
      {logementsList.map((logement) => (
        <div key={logement.id}>
          <h1 className="title">{logement.title}</h1>
          <p>{logementId}</p>
          <p className="location">{logement.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Title;
