import React from 'react';

import './Blocks.scss';

export const Blocks = ({title, price, seat, wifi, free, style, border, color}) => {
  return (
    <div className="blocks" style={border}>
      <div className="blocks__wrap" style={style}>
        <h3 className="blocks__title">{title}</h3>
        <span className="blocks__price">{price}</span>
      </div>
      <div className="blocks__text">
        <p className="blocks__seat">{seat}</p>

        {title === 'Standart' || title === 'Premium' ? (
         <p className="blocks__wifi--black">{wifi}</p>
        ) : (
         <p className="blocks__wifi--light">{wifi}</p>
        )}
        
        <p className="blocks__free" style={color}>{free}</p>
      </div>
      <a href="/" className="blocks__button">Get Tickets</a>
    </div>
  )
}

export default Blocks;
