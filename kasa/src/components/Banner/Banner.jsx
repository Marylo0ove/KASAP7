import React from "react";
import { useBanner } from "./Banner.hook";
import "./banner.css";

const Banner = (props) => {
  const h = useBanner(props);

  return (
    <div
      className="banner"
      style={
        {
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${h.backgroundImage})`,
        }
      }
    >
      <img src={h.backgroundImage} alt="" className="banner-image" />
      {h.bannerText && (
        <h1 className="home-title">
          {h.bannerText}
          <br className="display" />
          {h.bannerText2}
        </h1>
      )}
    </div>
  );
};

export default Banner;