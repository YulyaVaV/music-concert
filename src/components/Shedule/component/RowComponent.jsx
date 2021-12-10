import React from 'react';

import './RowComponent.scss';
import { Speaker } from './Speaker';

export const RowComponent = ({time, content, speakers, status}) => {
  return (
    <div className="row">
      <div className="row__time">{time}</div>
      <div className="row__content">{content}</div>
      <div className="row__speakers">
       {
         speakers.map(item => (
           <Speaker {...item}/>
         ))
       }
      </div>
      <div className="row__status">
        <img src={status} alt="status" />
      </div>
    </div>
  )
}

export default RowComponent;
