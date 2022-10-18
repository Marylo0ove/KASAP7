import React from "react";
import { logementsList } from "../data.js";
import "../styles/host.css";
import { useParams } from "react-router-dom";

const Host = () => {
  const params = useParams();
  const logementId = params.id;
  return (
    <div>
      {logementsList
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <div key={logementFiltre.host} className="host">
            <p className="host-name"> {logementFiltre.host.name}</p>
            <img
              className="host-picture"
              src={logementFiltre.host.picture}
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default Host;
