import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselGreenMove() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move1.png?alt=media&token=2a134d8c-97ba-4df6-a827-2ad4b28d386d'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move2.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move3.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarouselGreenMove;
