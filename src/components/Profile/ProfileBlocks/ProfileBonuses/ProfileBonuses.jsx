import React from 'react';

import FilterBar from '../../../FilterBar/FilterBar';
import Select from '../../../Select/Select';

import './ProfileBonuses.scss';

export default function ProfileBonuses() {
  return (
    <div className="bonuses">
      <div className="bonuses__wrapper">
        <FilterBar>
          <div className="select__wrapper">
            <Select />
          </div>
          <div className="coupon__wrapper">
            <div className="input__wrapper">
              <input placeholder="Promo Code" />
            </div>
            <div className="coupon__button">Send</div>
          </div>
        </FilterBar>
        <div className="bonuses__content">in progress...</div>
      </div>
    </div>
  );
}
