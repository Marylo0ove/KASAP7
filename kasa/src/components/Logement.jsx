import React from "react";
import CollapseEquipements from "./CollapseEquipments";
import CollapseLogement from "./CollapseLogement";
import "../styles/collapse.css";

const Logement = () => {
  return (
    <div className="collapse-flex">
      <CollapseLogement />
      <CollapseEquipements />
    </div>
  );
};

export default Logement;
