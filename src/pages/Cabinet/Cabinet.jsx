import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

import './Cabinet.scss';
import Footer from '../../components/Footer/Footer';

export default function Cabinet() {
  return (
    <div className="cabinet">
      <Header />
      <div className="sidebar__wrapper">
        <Sidebar />
      </div>
      <div className="cabinet__main">
        <Profile />
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}
