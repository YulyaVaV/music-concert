import React from 'react';

import './Sponsors.scss';

import google from './images/google.png';
import microsoft from './images/microsoft.png';
import airbnb from './images/airbnb.png';
import axure from './images/axure.png';
import apple from './images/apple.png';
import facebook from './images/facebook.png';
import nokia from './images/nokia.png';
import oracle from './images/oracle.png';

import pink from './images/pink.png';
import blue from './images/blue.png';

export const Sponsors = () => {
  return (
    <div className="sponsors" data-aos="fade-up">
      <h2 className="sponsors__title">Our Sponsors</h2>
      <div className="sponsors__images">
        <img src={google} alt="google" className="sponsors__img"></img>
        <img src={microsoft} alt="microsoft" className="sponsors__img"></img>
        <img src={airbnb} alt="airbnb" className="sponsors__img"></img>
        <img src={axure} alt="axure" className="sponsors__img"></img>
        <img src={apple} alt="apple" className="sponsors__img"></img>
        <img src={facebook} alt="facebook" className="sponsors__img"></img>
        <img src={nokia} alt="nokia" className="sponsors__img"></img>
        <img src={oracle} alt="oracle" className="sponsors__img"></img>
      </div>
      <a href="/" className="sponsors__button">Become a Sponsor</a>
     <div className="confetti">
        <img src={pink} alt="" className="sponsors__pink"/>
        <img src={blue} alt="" className="sponsors__blue"/>
     </div>
    </div>
  )
}

export default Sponsors;
