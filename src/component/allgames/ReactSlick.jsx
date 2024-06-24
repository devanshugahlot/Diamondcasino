import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ReactSlicj.css";
import RatingSize from "./Start";
import new_collections from '../Assets/new_collections'
import { Link } from "react-router-dom";
const Resizable = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; // Change this to the total number of slides

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSlideChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide to create the infinite effect
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Adjust the interval based on your requirements

    return () => clearInterval(interval);
  }, [ currentSlide, totalSlides ] );
  

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        customTransition="transform 500ms ease-in-out"
        beforeChange={handleSlideChange}
        afterChange={handleSlideChange}
      >
        {
          new_collections.map( (Item,index) =>
          {
            return (
            
        <div className="Item">
                <div className="product-img-div">
                  <Link  to={`/Product/${Item.id}`}>
            <img key={index} src={Item.image} alt="" />
                  </Link>
          </div>
          <div className="star-div">
            <RatingSize />
                  <p>{ Item.name}</p>
                  <span>{ Item.old_price}</span>
                  <p className="rate">{ Item.new_price}</p>
          </div>
        </div>
          )
            
          })

        
        }
      </Carousel>
      
      <div className="progress-bar">
        <div
          className=""
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default Resizable;
