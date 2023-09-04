import React from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../../assets/car1.jpeg';
import car2 from '../../assets/car2.jpeg';
import car3 from '../../assets/car3.jpeg';

const CustomCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="my-5">
          <img src={car1} alt="i" className="d-block w-100 rounded-3xl" />
          <Carousel.Caption className="p-5 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Discover your style.</h1>
            <p className=" text-lg">Your fashion journey starts here.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="my-5">
          <img src={car2} alt="i" className="d-block w-100 rounded-3xl" />
          <Carousel.Caption className="p-5 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Every Outfit, Every Occasion.</h1>
            <p className=" text-lg">Versatile styles for all moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="my-5">
          <img src={car3} alt="i" className="d-block w-100 rounded-3xl" />
          <Carousel.Caption className="p-5 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Fashion That Speaks.</h1>
            <p className=" text-lg">Make a statement with every look.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
