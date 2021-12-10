import React from 'react';

import './Instagram.scss';
import instagram from './images/Instagram.png';

import concert1 from './images/concert1.png';
import concert2 from './images/concert2.png';
import concert3 from './images/concert3.png';
import concert4 from './images/concert4.png';
import concert5 from './images/concert5.png';

import '../Swiper/SwiperInsta';
import { SwiperInsta } from '../Swiper/SwiperInsta';

const data = [{
  img: concert1,
  text: 'Lorem Ipsum Amet',
  tags: '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
},
{
  img: concert2,
  price: '$150',
  text: 'Lorem Ipsum Amet',
  tags: '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
},
{
  img: concert3,
  text: 'Lorem Ipsum Amet',
  tags: '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
},
{
  img: concert4,
  text: 'Lorem Ipsum Amet',
  tags: '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
},
{
  img: concert5,
  text: 'Lorem Ipsum Amet',
  tags: '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
},
]

export const Instagram = () => {
  return (
    <div className="instagram" data-aos="fade-up">
      <div className="instagram__icon">
        <img src={instagram} alt="instargam" />
      </div>
      <h2 className="instagram__title">See our Best Shots</h2>
      <div className="instagram__blocks">
      <SwiperInsta
          data={data}
        />
      </div>
    </div>
  )
}

export default Instagram;
