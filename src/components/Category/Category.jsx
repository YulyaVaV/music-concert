import React from 'react';

import '../utils/vars.scss';

import './Category.scss';
import Variables from './component/Variables';

import mixer from './images/Mixer.png';
import bagpipes from './images/Bagpipes.png';
import saxophone from './images/Saxophone.png';
import guitar from './images/Guitar.png';
import trumpet from './images/Trumpet.png';

import round from './images/round.png';
import pink from './images/pink-stick.png';
import black from './images/black-stick.png';
import blue from './images/blue-stick.png';

const data = [{
  img: mixer,
  title:'Pop',
  style:{backgroundColor: "#FBF3E8"},
  subtitle:'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae'
},
{
  img: bagpipes,
  title:'Folk',
  style:{backgroundColor: "#FFEEEE"},
  subtitle:'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae'
},
{
  img: saxophone,
  title:'Instrumental',
  style:{color: "#fff", backgroundColor: "#381DDB"},
  subtitle:'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae'
},
{
  img: guitar,
  title:'Rock',
  style:{backgroundColor: "#F9E6F5"},
  subtitle:'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae'
},
{
  img: trumpet,
  title:'Jazz',
  style:{backgroundColor: "#F3F9FF"},
  subtitle:'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae'
},
]

export const Category = () => {
  return (
    <div className="category" data-aos="fade-up">
      <h2 className="category__title"><span className="category__title--blue">Explore</span> By Category</h2>
      <div className="category__blocks">
        {
          data.map(item =>(
            <Variables
              img={item.img}
              title={item.title}
              style={item.style}
              subtitle={item.subtitle}
            />
          ))
        }
      </div>
      <div className="confetti">
        <img src={pink} alt="" className="category__pink"/>
        <img src={blue} alt="" className="category__blues"/>
        <img src={black} alt="" className="category__black"/>
        <img src={round} alt="" className="category__round"/>
      </div>
    </div>
  )
}

export default Category;
