import React from "react";
import { logementsList } from "../data.js";
import "../styles/host.css";

const Host = () => {
  return (
    <div>
      {logementsList.map((logement) => (
        <div key={logement.host} className="host">
          <p className="host-name"> {logement.host.name}</p>
          <img className="host-picture" src={logement.host.picture} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Host;
