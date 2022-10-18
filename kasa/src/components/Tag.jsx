import React from "react";
import "../styles/tag.css";
import { logementsList } from "../data.js";
import { useParams } from "react-router-dom";

const Tag = () => {
  const params = useParams();
  const logementId = params.id;
  return (
    <ul className="tags">
      {logementsList
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <li key={logementFiltre}>
            <div className="tag">{logementFiltre.tags}</div>
          </li>
        ))}
    </ul>
  );
};

export default Tag;
