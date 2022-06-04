import React from 'react';

import './MatchMarketsEvent.scss';

export default function MatchMarketsItemEvent({ eventName, eventRatio }) {
  return (
    <div className="match-markets-event">
      <div className="match-markets-event__name">{eventName}</div>
      <div className="match-markets-event__ratio">{eventRatio}</div>
    </div>
  );
}
