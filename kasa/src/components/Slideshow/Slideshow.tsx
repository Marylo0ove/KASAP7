import React from "react";
import "../../logements.json";
import "./slideshow.css";
import { useCarousel } from "./Slideshow.hook.tsx";
import arrowLeft from "../../assets/VectorLeftSlide.svg";
import arrowRight from "../../assets/VectorRightSlide.svg";

export interface CarouselProps {
  pictures: string[];
}

const Slideshow = (props: CarouselProps) => {
  const h = useCarousel(props);

  return (
    <div>
      <div className="slideshow">
        <img
          onClick={() => h.goToPrevious()}
          src={arrowLeft}
          alt="flèche vers la gauche"
          className="arrow-left"
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
          className="arrow-right"
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
