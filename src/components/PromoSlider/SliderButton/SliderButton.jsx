import React from 'react';

import './SliderButton.scss';

export default function SliderButton({ direction, moveSlide }) {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        <img src={direction === 'next' ? rightArrow : leftArrow} />
      </button>
    </div>
  );
}
