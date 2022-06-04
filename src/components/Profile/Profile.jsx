import React from 'react';

import Categories from '../Categories/Categories';
import ProfilePersonal from './ProfileBlocks/ProfilePersonal/ProfilePersonal';
import ProfilePayments from './ProfileBlocks/ProfilePayments/ProfilePayments';
import ProfileTransactionHistory from './ProfileBlocks/ProfileTransactionHistory/ProfileTransactionHistory';
import ProfileBetHistory from './ProfileBlocks/ProfileBetHistory/ProfileBetHistory';
import ProfileBonuses from './ProfileBlocks/ProfileBonuses/ProfileBonuses';

import './Profile.scss';
import ProfileSection from './ProfileSection/ProfileSection';

const categoryNames = [
  'Profile',
  'Payments',
  'Transaction History',
  'Bet History',
  'Bonuses',
];

export default function Profile() {
  const [activeCategory, setActiveCategory] = React.useState(null);

  const onSelectCategory = (index) => {
    setActiveCategory(index);
  };

  function renderCategory() {
    switch (activeCategory) {
      case 0:
        return <ProfilePersonal />;

      case 1:
        return <ProfilePayments />;

      case 2:
        return <ProfileTransactionHistory />;

      case 3:
        return <ProfileBetHistory />;

      case 4:
        return <ProfileBonuses />;

      default:
        return <div />;
    }
  }

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__header">
          <div className="profile__header__top">
            <div className="profile__description">username Profile</div>
          </div>
          <div className="profile__sections">
            <ProfileSection title="Total Money" info="€ 0" />
            <ProfileSection title="Something else" info="Not much" />
            <ProfileSection title="Something else" info="Not much" />
            <ProfileSection title="Something else" info="Not much" />
          </div>
        </div>
        <div className="profile__categories__wrapper">
          <Categories
            onClickCategory={onSelectCategory}
            items={categoryNames}
            activeCategory={activeCategory}
          />
        </div>
        <div className="profile__content-block">{renderCategory()}</div>
      </div>
    </div>
  );
}
