import React from 'react';
import { Carousel } from 'react-bootstrap';
import car8 from '../../assets/car8.avif';
import car5 from '../../assets/car5.avif';
import car7 from '../../assets/car7.avif';

const CustomCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="my-5">
          <img
            src={car7}
            alt="i"
            className="d-block w-full h-80 rounded-3xl object-cover"
          />
          <Carousel.Caption className="p-2 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Discover your style.</h1>
            <p className=" text-lg">Your fashion journey starts here.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="my-5">
          <img
            src={car5}
            alt="i"
            className="d-block w-full h-80 rounded-3xl object-cover"
          />
          <Carousel.Caption className="p-2 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Every Outfit, Every Occasion.</h1>
            <p className=" text-lg">Versatile styles for all moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="my-5">
          <img
            src={car8}
            alt="i"
            className="d-block w-full h-80 rounded-3xl object-cover"
          />
          <Carousel.Caption className="p-2 bg-stone-600 rounded-3xl opacity-80">
            <h1 className="">Fashion That Speaks.</h1>
            <p className=" text-lg">Make a statement with every look.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
