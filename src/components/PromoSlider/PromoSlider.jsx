/* eslint-disable react/self-closing-comp */
import React from 'react';

import SliderButton from './SliderButton/SliderButton';

import './PromoSlider.scss';

import sliderData from './sliderData';

export default function PromoSlider() {
  const [slideIndex, setSlideIndex] = React.useState(1);

  const handleNextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  };

  const handleMoveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider__container">
        {sliderData.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <img src="" alt="" />
            </div>
          );
        })}
        <SliderButton move={handleNextSlide} direction="next" />
        <SliderButton move={handlePrevSlide} direction="prev" />
        <div className="slider__controller">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => handleMoveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
