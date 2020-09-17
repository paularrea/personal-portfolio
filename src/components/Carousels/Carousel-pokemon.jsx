import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselPokemon() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/pokemon%2Fcarousel-pokemon1.png?alt=media&token=9ebe38bc-48aa-4854-a04a-511bf4365601"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/pokemon%2Fcarousel-pokemon2.png?alt=media&token=9ebe38bc-48aa-4854-a04a-511bf4365601"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPokemon;
