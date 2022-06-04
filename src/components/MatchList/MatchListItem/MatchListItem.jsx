import React from 'react';

import Live from '../../UI/Live/Live';

import './MatchListItem.scss';

function MatchListItem() {
  return (
    <div className="match-list__item">
      <div className="match-list__item__game-logo">
        <img
          width="24px"
          height="24px"
          src="https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="match-list__item__live-container">
        <Live />
      </div>
      <div className="match-list__item__team-block">
        <div className="match-list__item__team-name">Team Liquid</div>
        <div className="match-list__item__team-logo">
          <img
            width="40px"
            height="40px"
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/24/24efc3c587906411e9b0caf68fa2e7bb4c19cd11_full.jpg"
            alt=""
          />
        </div>
        <div className="match-list__item__ratio">1.52</div>
      </div>
      <div className="match-list__item__versus-block">VS</div>
      <div className="match-list__item__team-block">
        <div className="match-list__item__ratio">2.22</div>
        <div className="match-list__item__team-logo">
          <img
            src="https://www.meme-arsenal.com/memes/fd66d2b5c7034d9ddb8e16f79973c3e4.jpg"
            alt=""
            width="40px"
            height="40px"
          />
        </div>
        <div className="match-list__item__team-name">Team Secret</div>
      </div>
      <div className="match-list__item__play-button">
        <img
          src="https://image.flaticon.com/icons/png/512/98/98690.png"
          alt=""
        />
      </div>
      <div className="match-list__item__viewer-counter">+14</div>
    </div>
  );
}

export default MatchListItem;
