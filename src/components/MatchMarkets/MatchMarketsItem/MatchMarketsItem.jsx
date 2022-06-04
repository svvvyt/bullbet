import React from 'react';

import MatchMarketsItemEvent from './MatchMarketsEvent/MatchMarketsEvent';

import './MatchMarketsItem.scss';

export default function MatchMarketsItem({ marketName }) {
  return (
    <div className="match-markets-item">
      <div className="match-markets-item__wrapper">
        <div className="match-markets-item__market-name">{marketName}</div>
        <div className="match-markets-item__events">
          <MatchMarketsItemEvent eventName="event_name" eventRatio="0.0" />
          <MatchMarketsItemEvent
            eventName="another_event_name"
            eventRatio="100.0"
          />
          <MatchMarketsItemEvent
            eventName="another_event_name"
            eventRatio="100.0"
          />
          <MatchMarketsItemEvent
            eventName="another_event_name"
            eventRatio="100.0"
          />
          <MatchMarketsItemEvent
            eventName="another_event_name"
            eventRatio="100.0"
          />
          <MatchMarketsItemEvent
            eventName="another_event_name"
            eventRatio="100.0"
          />
        </div>
      </div>
    </div>
  );
}
