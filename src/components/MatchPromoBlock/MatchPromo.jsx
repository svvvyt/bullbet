import React from 'react';

import './MatchPromo.scss';

export default function MatchPromo() {
  return (
    <div className="match-promo">
      <div className="match-promo__wrapper">
        {/* <div className="match-promo__header">
          <div className="match-promo__game-name">game_name</div>
          <div className="match-promo__league-name">league_name</div>
        </div> */}
        <div className="match-promo__main">
          <div className="match-promo__team">
            <div className="match-promo__team-logo">
              <img
                src="https://statistics.betconstruct.com/images/e/m/357/714739.png"
                alt="team-logo"
              />
            </div>
            <div className="match-promo__team-name">team_name</div>
          </div>
          <div className="match-promo__status">
            <div className="match-promo__status__date">10 March, 00:00</div>
            <div className="match-promo__status__isLive">Not Started</div>
          </div>
          <div className="match-promo__team">
            <div className="match-promo__team-logo">
              <img
                src="https://statistics.betconstruct.com/images/e/m/270/540805.png"
                alt="team-logo"
              />
            </div>
            <div className="match-promo__team-name">team_name</div>
          </div>
        </div>
      </div>
    </div>
  );
}
