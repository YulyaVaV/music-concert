import React from 'react';
import Blocks from './component/Blocks';

import './Price.scss';

import triangle from './images/triangle.png';
import black from './images/black-stick.png';
import round from './images/round.png';

const data = [{
  title:'Basic',
  price: '$100',
  seat: '1 Seat Available',
  wifi: 'Access to Wifi Router',
  free: 'Free Food & Coffee',
  color: {color: '#909090'},
  style:{color: "#222222"},
  border:{borderTop: "5px solid #222222"}
},
{
  title:'Standart',
  price: '$150',
  seat: '1 Seat Available',
  wifi: 'Access to Wifi Router',
  free: 'Free Food & Coffee',
  color: {color: '#909090'},
  style:{color: "#381DDB"},
  border:{borderTop: "5px solid #381DDB"}
},
{
  title:'Premium',
  price: '$200',
  seat: '2 Seat Available',
  wifi: 'Access to Wifi Router',
  free: 'Free Food & Coffee',
  style:{color: "#FC5252"},
  border:{borderTop: "5px solid #FC5252"}
},
]

export const Price = () => {
  return (
    <div className="price" data-aos="fade-up" id="tickets">
      <h2 className="price__title">Choose a Tier that’s right for you</h2>
      <div className="price__blocks">
        {
          data.map(item => (
            <Blocks
              title={item.title}
              price={item.price}
              seat={item.seat}
              wifi={item.wifi}
              free={item.free}
              style={item.style}
              border={item.border}
              color={item.color}
            />
          ))
        }
      </div>
      <div className="confetti">
        <img src={black} alt="" className="price__black"/>
        <img src={round} alt="" className="price__round"/>
        <img src={triangle} alt="" className="price__triangle"/>
      </div>
    </div>
  )
}

export default Price;
