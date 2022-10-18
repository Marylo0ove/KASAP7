import React from "react";
import { useState } from "react";
import { logementsList } from "../data.js";
import "../styles/slideshow.css";
import arrowLeft from "../assets/VectorLeftSlide.svg";
import arrowRight from "../assets/VectorRightSlide.svg";
import { useParams } from "react-router-dom";

const Slideshow = ({ slides }) => {
  const params = useParams();
  const logementId = params.id;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slideshow">
      <div onClick={goToPrevious}>
        <img
          src={arrowLeft}
          alt="flèche vers la gauche"
          className="arrow-left"
        />
      </div>
      <div>
        {" "}
        {logementsList
          .filter((logement) => logement.id === logementId)
          .map((logementFiltre) => (
            <div
              key={logementFiltre.pictures}
              className="slides"
              style={{
                backgroundImage: `url(${logementFiltre.pictures[currentIndex].url})`,
              }}
            >
              {" "}
            </div>
          ))}
      </div>
      <div onClick={goToNext}>
        <img
          src={arrowRight}
          alt="flèche vers la droite"
          className="arrow-right"
        />
      </div>
    </div>
  );
};

export default Slideshow;
