import React from "react";
import { useState } from "react";
import "../styles/collapse.css";
import vector from "../assets/Vector.svg";
import { textsList } from "../texts";

const Collapse = () => {
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
      {textsList.map((propos, index) => (
        <div key={index}>
          <div className="collapse" onClick={() => toggleCollapse(index)}>
            <h2 className="collapse-text ">{propos.title}</h2>
            <div>
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
          </div>
          <div
            className={
              isOpen === index ? "collapse-description" : "display-none"
            }
          >
            <p>{propos.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
