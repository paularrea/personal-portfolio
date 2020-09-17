import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw1.png?alt=media&token=2117ea13-44cd-4bdb-945d-affc67fa0cc5'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw2.png?alt=media&token=c2ffa11a-560e-40a7-9fd7-59b876438350'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw3.png?alt=media&token=27405190-91d7-40d2-9304-7303ce6ff167'
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw4.png?alt=media&token=780a867e-5c26-4e9f-8a9c-28d57f8aea9a'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;
