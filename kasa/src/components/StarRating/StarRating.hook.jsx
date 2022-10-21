import { useEffect, useState } from "react";

export const useStarRating = (props) => {
  const [emptyStars, setEmptyStar] = useState(0);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setEmptyStar(5 - props.score);
  }, []);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < props.score; i++) {
      temp.push(true);
    }
    for (let j = 0; j < emptyStars; j++) {
      temp.push(false);
    }

    setRating(temp.slice(0, 5));
  }, [emptyStars]);

  return {
    ...props,
    emptyStars,
    rating,
  };
};
