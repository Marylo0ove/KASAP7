import React from "react";
import "../../logements.json";
import "./slideshow.css";
import { useCarousel } from "./Slideshow.hook";
import arrowLeft from "../../assets/VectorLeftSlide.svg";
import arrowRight from "../../assets/VectorRightSlide.svg";

const Slideshow = (props) => {
  const h = useCarousel(props);

  return (
    <div>
      <div className="slideshow">
        <img
          onClick={() => h.goToPrevious()}
          src={arrowLeft}
          alt="flèche vers la gauche"
          className={
            props.pictures.length > 1 ? "arrow-left" : "arrow-left invisibility"
          }
        />

        {h.picUrl && (
          <img
            className="slides"
            src={h.picUrl}
            alt="displayed image in carousel"
          />
        )}

        <img
          onClick={() => h.goToNext()}
          src={arrowRight}
          alt="flèche vers la droite"
          className={
            props.pictures.length > 1
              ? "arrow-right"
              : "arrow-right invisibility"
          }
        />
      </div>
      <div>
        <p className="numero">
          {h.picIndex + 1}/{h.pictures.length}
        </p>
      </div>
    </div>
  );
};

export default Slideshow;
