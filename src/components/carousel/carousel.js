import React, { useState } from "react";

import "./carousel.css";

import arrowLeft from "../../images/arrowLeft.svg";
import arrowRight from "../../images/arrowRight.svg";
import noImage from "../../images/no-image.jpg";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="carousel">
      {(!pictures || length) <= 0 && (
        <div>
          <img src={noImage} className="carousel-image" alt="No image available" />
        </div>
      )}
      {pictures.map((picture, index) => (
        <div className={index === current ? 'carousel-active' : ''} key={index}>
          {index === current && (
            <img src={process.env.REACT_APP_BACK_ADDR + picture.url} className="carousel-image" alt={picture.alternativeText} />
          )}
        </div>
      ))}
      {length > 1 && (
        <>
          <span className='carousel-counter'>{current + 1}/{length}</span>
          <div className="left-arrow" onClick={prev}>
            <img src={arrowLeft} alt="Image précédente" />
          </div>
          <div className="right-arrow" onClick={next}>
            <img src={arrowRight} alt="Image suivante" />
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
