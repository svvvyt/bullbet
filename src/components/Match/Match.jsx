import React from 'react';
import Live from '../UI/Live/Live';

import './Match.scss';

function Match() {
  return (
    <div className="daily-match">
      <div className="daily-match__container">
        <div className="daily-match__header">
          <div className="daily-match__game-logo">
            <img
              src="https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div className="daily-match__live-container">
            <Live />
          </div>
          <div className="daily-match__play-button">
            <img
              src="https://image.flaticon.com/icons/png/512/98/98690.png"
              alt=""
              width="18px"
              height="18px"
            />
          </div>
          <div className="daily-match__viewer-counter">+41</div>
        </div>
        <div className="daily-match__main-block">
          <div className="daily-match__team-block">
            <div className="daily-match__team-block__logo">
              <img
                width="40px"
                height="40px"
                src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/24/24efc3c587906411e9b0caf68fa2e7bb4c19cd11_full.jpg"
                alt=""
                className="team-logo"
              />
            </div>
            <div className="daily-match__team-block__name">NRG Esports</div>
            <div className="daily-match__team-block__ratio">1.35</div>
          </div>
          <span className="daily-match__versus-block">VS</span>
          <div className="daily-match__team-block">
            <div className="daily-match__team-block__logo">
              <img
                width="40px"
                height="40px"
                src="https://www.meme-arsenal.com/memes/fd66d2b5c7034d9ddb8e16f79973c3e4.jpg"
                alt=""
                className="team-logo"
              />
            </div>
            <div className="daily-match__team-block__name">Syman</div>
            <div className="daily-match__team-block__ratio">3.05</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
