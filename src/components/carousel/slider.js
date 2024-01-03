import React, { useState } from "react";

import "./slider.css";

import arrowLeft from "../../images/arrowLeft.svg";
import arrowRight from "../../images/arrowRight.svg";
import noImage from "../../images/no-image.jpg";

function Slider({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="sliders">
      {(!pictures || length) <= 0 && (
        <div className='slides'>
          <img src={noImage} className="slide-image" alt="No image available" />
      </div>
      )}
      {pictures.map((picture, index) => (
        <div className={index === current ? 'slide-active' : 'slides'} key={index}>
          {index === current && (
            <img src={process.env.REACT_APP_BACK_ADDR + picture.url} className="slide-image" alt={picture.alternativeText} />
          )}
        </div>
      ))}
      {length > 1 && (
        <>
          <span className='slider-counter'>{current + 1}/{length}</span>
          <img src={arrowLeft} alt="Image précédente" className="left-arrow" onClick={prev} />
          <img src={arrowRight} alt="Image suivante" className="right-arrow" onClick={next} />
        </>
      )}
    </div>
  );
}

export default Slider;
