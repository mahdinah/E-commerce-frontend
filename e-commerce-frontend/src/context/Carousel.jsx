import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config,useSpring } from "react-spring";
import { useInterval } from 'react-use';


export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cardds, setCards] = useState(table);
  const [activeIndex, setActiveIndex] = useState(0);
  // const propss = useSpring({ opacity: 0.1, from: { opacity: 0 } });

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    setCards(table);
    setActiveIndex(0);
  }, [props.offset, props.showArrows, props.cards]);

  useInterval(() => {
    const nextIndex = (activeIndex + 1) % cardds.length;
    setGoToSlide(nextIndex);
    setActiveIndex(nextIndex);
  }, 10000);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cardds}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}