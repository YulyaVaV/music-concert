import React from 'react';

import './Speaker.scss';

export const Speaker = ({name, img, code}) => {
  return (
    <div className="speakers">
      <div className="speakers__avatar">
        <img src={img} alt="person" />
      </div>
      <div className="speakers__info">
        <p className="speakers__name">{name}</p>
        <p className="speakers__booth">
          Booth:
          <span className="speakers__code"> {code}</span>
        </p>
      </div>
    </div>
  )
}
