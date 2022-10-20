import React from "react";
import greyStar from "../../assets/star_rate-24-grey.svg";
import redStar from "../../assets/star_rate-24-red.svg";
import { useStarRating } from "./StarRating.hook.tsx";

export interface StarRatingProps {
  score: number;
}
const StarRating = (props: StarRatingProps) => {
  const h = useStarRating(props);

  return (
    <>
      {h.rating &&
        h.emptyStars &&
        h.rating.map((rate: boolean, key: number) => {
          if (rate) {
            return <img key={key} src={redStar} alt="Etoile rouge" />;
          } else {
            return <img key={key} src={greyStar} alt="Etoile grise" />;
          }
        })}
    </>
  );
};

export default StarRating;
