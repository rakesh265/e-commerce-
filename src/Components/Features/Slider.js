import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../Assets/Images/banner-1.jpg';
import Banner2 from '../../Assets/Images/BANNER2.png';
import Banner3 from '../../Assets/Images/BANNER3.png';

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;