import React from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
// import Button from '../../components/UI/Button/Button';
import MatchPromo from '../../components/MatchPromoBlock/MatchPromo';
import MatchMarkets from '../../components/MatchMarkets/MatchMarkets';

import './MatchPage.scss';

export default function MatchPage() {
  return (
    <div className="match">
      <Header />
      <div className="sidebar__wrapper">
        <Sidebar />
      </div>
      <div className="match__main">
        <MatchPromo />
        <MatchMarkets />
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}
