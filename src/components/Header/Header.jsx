import React from 'react';

import './Header.scss';

import logo from './images/logo.png';
import arrow from './images/arrow.png';
import play from './images/play.png';
import numbers from './images/numbers.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__logo"><img src={logo} alt="logo"/></div>
        <nav className="header__nav">
          <a href="/" className="header__item">Home</a>
          <a href="#speakers" className="header__item">Speakers<img src={arrow} alt="arrow" className="header__item--arrow"/></a>
          <a href="#shedule" className="header__item">Shedule<img src={arrow} alt="arrow" className="header__item--arrow"/></a>
          <a href="#contactUs" className="header__item">Contact us</a>
          <a href="#tickets" className="header__last">Get Tickets</a>
        </nav>
      </div>

      <div className="header__content">
        <h1 className="header__title">The Best Experience Of <span className="header__title--music">Music</span> In 2021</h1>
        <h3 className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</h3>
        <div className="header__button">
          <button className="header__btn">Get Started</button>
          <a href="/" className="header__button--video"><img src={play} alt="play"/>Watch Video</a>
        </div>
        <div className="header__numbers"><img src={numbers} alt="" className="header__numbers"/></div>
      </div>
    </div>
  )
}

export default Header;
