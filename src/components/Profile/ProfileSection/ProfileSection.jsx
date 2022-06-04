import React from 'react';

import Button from '../../UI/Button/Button';

import './ProfileSection.scss';

export default function ProfileSection({ title, info }) {
  return (
    <div className="profile__section">
      <div className="profile__section__title">{title}</div>
      <div className="profile__section__info">{info}</div>
      <div className="profile__section__action-btn">
        <Button main>DEPOSIT</Button>
      </div>
    </div>
  );
}
