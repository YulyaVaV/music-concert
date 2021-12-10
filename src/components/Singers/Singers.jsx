import React from 'react';

import './Singers.scss';

import singers from './images/singers.png';
import arrow from './images/arrow.png';

import dotted from './images/dotted.jpg';
import blue from './images/blue.png';
import pink from './images/pink.png';

export const Singers = () => {
  return (
    <div className="singers" data-aos="fade-up">
      <div className="singers__content">
        <h2 className="singers__title">Singers</h2>
        <p className="singers__subtitle">Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
        <button className="singers__button">View All Singers<img src={arrow} alt="arrow" className="singers__arrow"/></button>
      </div>
      <div className="singers__image"><img src={singers} alt="singers" className="singers__image"/></div>
      <div className="confetti">
        <img src={dotted} alt="" className="singers__dotted"/>
        <img src={blue} alt="" className="singers__blue"/>
        <img src={pink} alt="" className="singers__pink"/>
      </div>
    </div>
  )
}

export default Singers;
