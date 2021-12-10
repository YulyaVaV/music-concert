import React from 'react';

import './Testimonials.scss';

import ellie from './images/ellie.png';
import johny from './images/johny.png';
import myne from './images/myne.png';

import { Swip } from '../Swiper/Swiper';

const data = [{
  comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  photo: ellie,
  name: 'Ellie James',
  email: 'ipsum.com',
},
{
  comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  photo: johny,
  name: 'Johnny Doe',
  email: 'ipsum.com',
},
{
  comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  photo: myne,
  name: 'Myne Barack',
  email: 'ipsum.com',
},
]

export const Testimonials = () => {
  return (
    <div className="testimonials" data-aos="fade-up" id="speakers">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__comments">
        <Swip
          data={data}
        />
      </div>
    </div>
  )
}

export default Testimonials;
