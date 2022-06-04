import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './About.scss';
import AboutBlock from '../../components/AboutBlock/AboutBlock';

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="about__main">
        <AboutBlock />
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}
