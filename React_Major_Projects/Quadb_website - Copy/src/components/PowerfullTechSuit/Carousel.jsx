// -----------------new carousel using ---------------
import React from "react";
import Slider from "react-slick";
import { MdNavigateNext, GrFormPrevious } from "react-icons";
import Card from "./Card"; // Import your old Card component

const Carousel = ({ cards }) => {
  const sliderRef = React.createRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carouselContainer">
      <div className="arrow-right" onClick={slideRight}>
        <MdNavigateNext size={23} />
      </div>
      <div className="arrow-left" onClick={slideLeft}>
        <GrFormPrevious size={23} />
      </div>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((item) => (
          <div key={item.name} className="cardContainer">
            <Card name={item.name} content={item.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
