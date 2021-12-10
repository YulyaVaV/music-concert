import React from 'react';

import './About.scss';

import music from './images/music.png';
import arrow from './images/arrow.png';
import confetti from './images/confetti.png';

export const About = () => {
  return (
    <div className="about" data-aos="fade-up">
      <div className="about__image"><img src={music} alt="music" className="about__image"/></div>
      <div className="about__content">
        <h2 className="about__title">About Music</h2>
        <p className="about__subtitle">Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
        <button className="about__button">Learn more<img src={arrow} alt="arrow" className="about__arrow"/></button>
      </div>
      <div className="confetti">
        <img src={confetti} alt="" className="about__confetti"/>
      </div>
    </div>
  )
}

export default About;
