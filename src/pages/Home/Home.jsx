import React from 'react';

import Header from '../../components/Header/Header';
import MatchList from '../../components/MatchList/MatchList';
import MatchSlider from '../../components/MatchSlider/MatchSlider';
import PromoSlider from '../../components/PromoSlider/PromoSlider';
import Sidebar from '../../components/Sidebar/Sidebar';
// import BetSlip from '../../components/BetSlip/BetSlip';
import Footer from '../../components/Footer/Footer';
// import ModalBlock from '../../components/ModalBlock/ModalBlock';

import './Home.scss';

// TODO: fix bug: cursor on border glitch padding:hover if necessary
// TODO: onhover element - description of betting term

export default function Home() {
  return (
    <div className="home">
      {/* <ModalBlock /> */}
      <Header />
      <div className="sidebar__wrapper">
        <Sidebar />
      </div>
      <div className="home__main">
        <PromoSlider />
        <MatchSlider />
        <MatchList />
      </div>
      {/* <div className="bet-slip__wrapper">
        <BetSlip />
      </div> */}
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}
