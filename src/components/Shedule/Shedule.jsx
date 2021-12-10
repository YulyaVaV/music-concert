import React from 'react';

import './Shedule.scss';

import yui from './images/yui.png';
import bob from './images/bob.png';
import emma from './images/emma.png';
import sasha from './images/sasha.png';
import diana from './images/diana.png';
import preview from './images/preview.png';
import live from './images/live.png';
import upcoming from './images/upcoming.png';

import round from './images/round.png';
import zigzag from './images/zigzag.png';
import red from './images/red.png';
import RowComponent from './component/RowComponent';

const data = [{
  time: '11:00 AM to 12:00 PM',
  content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
  speakers: [{
    img: yui,
    name: 'Yui Ronald',
    code: '2F12'
  }],
  status: preview,
},
{
  time: '12:00 PM to 03:00 PM',
  content: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
  speakers: [{
    img: bob,
    name: 'Bob John',
    code: '3G12'
  },
{
  img: yui,
  name: 'Yui Ronald',
  code: '2F12'
},
{
  img: emma,
  name: 'Emma Satoshi',
  code: '2A35'
}
],
  status: live,
},
{
  time: '03:00 PM to 04:00 PM',
  content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus. ',
  speakers: [{
    img: sasha,
    name: 'Sasha Jackson',
    code: '2F18'
  },
  {
    img: diana,
    name: 'Diana Brock',
    code: '2F24'
  }
],
  status: upcoming,
}]

export const Shedule = () => {
  return (
    <div className="shedule" data-aos="fade-up" id="shedule">
     <h2 className="shedule__title">Event Schedule</h2>
      <div className="shedule__wrap">
        <div className="shedule__left">
          <h3 className="shedule__blue">Day 1</h3>
          <p className="shedule__data--blue">16 August</p>
        </div>
        <div className="shedule__medium">
          <h3 className="shedule__day">Day 2</h3>
          <p className="shedule__data">17 August</p>
        </div>
        <div className="shedule__right">
          <h3 className="shedule__day">Day 3</h3>
          <p className="shedule__data">18 August</p>
        </div>
      </div>
       <div className="shedule__table">
         <div className="shedule__header">
           <div className="shedule__wrapper">
             <h3 className="shedule__header--title">Time</h3>
           </div>
           <div className="shedule__wrapper--second">
             <h3 className="shedule__header--title">Content</h3>
           </div>
           <div className="shedule__wrapper">
             <h3 className="shedule__header--title">Speakers</h3>
           </div>
         </div>
         <div className="shedule__blocks">
           {
             data.map(item => (
               <RowComponent
                time={item.time}
                content={item.content}
                speakers={item.speakers}
                status={item.status}
              />
             ))
           }
         </div>
       </div>

      <div className="confetti">
        <img src={round} alt="" className="shedule__round"/>
        <img src={zigzag} alt="" className="shedule__zigzag"/>
        <img src={red} alt="" className="shedule__red"/>
      </div>
    </div>
  )
}

export default Shedule;
