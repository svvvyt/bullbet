import React from 'react';

import Button from '../UI/Button/Button';

import './BetSlip.scss';

export default function BetSlip() {
  return (
    <div className="bet-slip">
      <div className="bet-slip__container">
        <div className="bet-slip__buttons">
          <Button main>Bet Slip</Button>
        </div>
        <div className="bet-slip__content"></div>
      </div>
    </div>
  );
}
