import { useEffect, useState } from "react";

export const useCarousel = (props) => {
  const [displayArrows] = useState(props.pictures.length > 1);
  const [picIndex, setPicIndex] = useState(-1);
  const [picUrl, setPicUrl] = useState();

  useEffect(() => {
    setPicIndex(0);
  }, []);

  useEffect(() => {
    setPicUrl(props.pictures[picIndex]);
  }, [picIndex]);

  const goToNext = () => {
    const isLastSlide = picIndex === props.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : picIndex + 1;
    setPicIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = picIndex === 0;
    const newIndex = isFirstSlide ? props.pictures.length - 1 : picIndex - 1;
    setPicIndex(newIndex);
  };

  return {
    ...props,
    displayArrows,
    goToNext,
    picUrl,
    goToPrevious,
    picIndex,
  };
};
