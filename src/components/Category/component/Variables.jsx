import React from 'react';

import './Variables.scss';

export const Variables = ({img, title, subtitle, style}) => {
  return (
    <div className="variables">
      <div className="variables__block" style={style}>
        <div className="variables__image"><img src={img} alt=""/></div>
        <h3 className="variables__title">{title}</h3>
        <p className="variables__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default Variables;
