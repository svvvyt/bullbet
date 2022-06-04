import React from 'react';
import Select from '../../../Select/Select';
import FilterBar from '../../../FilterBar/FilterBar';

import './ProfileTransactionHistory.scss';

export default function ProfileTransactionHistory() {
  // TODO: DatePicker and Select components

  return (
    <div className="transaction-history__block">
      <div className="transaction-history__wrapper">
        <div className="transaction-history__balance-info">
          <div className="transaction-history__balance-item">
            <p className="transaction-history__balance-item__action">
              Deposits
            </p>
            <p className="transaction-history__balance-item__amount">
              $ user_deposits
            </p>
          </div>
          <div className="transaction-history__balance-item">
            <p className="transaction-history__balance-item__action">
              Withdrawals
            </p>
            <p className="transaction-history__balance-item__amount">
              $ user_withdrawals
            </p>
          </div>
        </div>
        <FilterBar>
          <Select />
        </FilterBar>
        <div className="transaction-history__content">in progress...</div>
      </div>
    </div>
  );
}
