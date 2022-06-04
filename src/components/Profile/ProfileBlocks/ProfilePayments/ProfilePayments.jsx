import React from 'react';

import './ProfilePayments.scss';

export default function ProfilePayments() {
  return (
    <div className="payments-block">
      <div className="payments__wrapper">
        <div className="payments__tabs">
          <div className="payments__tab payments__tab__left">Deposit</div>
          <div className="payments__tab payments__tab__right">Withdraw</div>
        </div>
        <div className="payments__form">in progress...</div>
      </div>
    </div>
  );
}
