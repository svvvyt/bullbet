import React from 'react';

import Categories from '../Categories/Categories';
import MatchMarketsItem from './MatchMarketsItem/MatchMarketsItem';

import './MatchMarkets.scss';

export default function MatchMarkets() {
  const categoryNames = ['All Markets', 'Match', 'Game 1', 'Game 2'];

  return (
    <div className="match-markets">
      <div className="match-markets__wrapper">
        <div className="match-markets__header">
          <div className="match-markets__game-name">game-name</div>
          <div>—</div>
          <div className="match-markets__league-name">league-name</div>
        </div>
        <div className="match-markets__categories__wrapper">
          <Categories items={categoryNames} />
        </div>
        <div className="match-markets__main">
          <MatchMarketsItem
            marketName="Match Result"
            eventName="Team SoloMid Academy"
            eventRatio="4.50"
          />
          <MatchMarketsItem
            marketName="Match Result"
            eventName="Team SoloMid Academy"
            eventRatio="4.50"
          />
        </div>
      </div>
    </div>
  );
}
