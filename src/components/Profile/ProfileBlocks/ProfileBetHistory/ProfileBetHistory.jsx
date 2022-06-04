import React from 'react';

import FilterBar from '../../../FilterBar/FilterBar';
import Select from '../../../Select/Select';

import './ProfileBetHistory.scss';

export default function ProfileBetHistory() {
  return (
    <div className="bet-history">
      <div className="bet-history__wrapper">
        <FilterBar>
          <div className="select__wrapper">
            <Select />
          </div>
          <Select />
        </FilterBar>
        <div className="bet-history__content">in progress...</div>
      </div>
    </div>
  );
}
