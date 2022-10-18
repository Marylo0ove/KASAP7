import React from "react";
import { useState } from "react";
import "../styles/collapse.css";
import vector from "../assets/Vector.svg";
import { logementsList } from "../data.js";
import { useParams } from "react-router-dom";

const CollapseEquipements = () => {
  const params = useParams();
  const logementId = params.id;
  const [isOpen, setIsOpen] = useState(-1);

  function toggleCollapse(index) {
    if (index === isOpen) {
      setIsOpen(-1);
      return;
    }
    setIsOpen(index);
  }
  return (
    <div>
      {logementsList
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre, index) => (
          <div key={index}>
            <div
              className="collapse equipements"
              onClick={() => toggleCollapse(index)}
            >
              <p className="collapse-text">Equipements</p>
              <img
                src={vector}
                alt="flèche"
                className={
                  isOpen === index
                    ? "collapse-arrow collapse-arrow-turn"
                    : "collapse-arrow"
                }
              />
            </div>
            <div
              className={
                isOpen === index
                  ? "collapse-description equipements "
                  : "display-none"
              }
            >
              <p>{logementFiltre.equipments}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CollapseEquipements;
