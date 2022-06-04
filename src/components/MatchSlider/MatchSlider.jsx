import React from 'react';

import Match from '../Match/Match';

import './MatchSlider.scss';

function MatchSlider() {
  return (
    <div className="match-slider">
      <div className="match-slider__header">
        <div className="match-slider__header__content">
          <div className="match-slider__header__expandable">▼</div>
          <p className="match-slider__header__text">Featured Matches</p>
          <p className="match-slider__header__available">n</p>
        </div>
        <div className="match-slider__header__nav">
          <div className="match-slider__header__arrow">◀</div>
          <div className="match-slider__header__arrow">▶</div>
        </div>
      </div>
      <div className="match-slider__main">
        <div className="match-slider__main__slides">
          <div className="match-slider__main__slide">
            <Match />
          </div>
          <div className="match-slider__main__slide">
            <Match />
          </div>
          <div className="match-slider__main__slide">
            <Match />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchSlider;
