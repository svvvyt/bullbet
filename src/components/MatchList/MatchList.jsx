import React from 'react';

import Categories from '../Categories/Categories';
import MatchListItem from './MatchListItem/MatchListItem';

import './MatchList.scss';

export default function MatchList() {
  const [activeSortGameType, setActiveSortGameType] = React.useState(null);
  const [activeSortTime, setActiveSortTime] = React.useState(null);

  const categorySortGameType = ['Matches', 'Tournaments', 'Upcoming'];
  const categorySortTime = [
    'All Time',
    '1 Hour',
    '2 Hours',
    '6 Hours',
    '12 Hours',
    'Day',
    'Week',
  ];

  const onSelectSortGameType = (index) => {
    setActiveSortGameType(index);
  };

  const onSelectSortTime = (index) => {
    setActiveSortTime(index);
  };

  return (
    <div className="match-list">
      <div className="match-list__categories-wrapper">
        <Categories
          activeCategory={activeSortGameType}
          onClickCategory={onSelectSortGameType}
          items={categorySortGameType}
        />
      </div>
      <div className="match-list__sort-wrapper">
        <Categories
          activeCategory={activeSortTime}
          onClickCategory={onSelectSortTime}
          items={categorySortTime}
        />
      </div>
      <div className="match-list__items">
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
        <div className="match-list__item-wrapper">
          <MatchListItem />
        </div>
      </div>
    </div>
  );
}
