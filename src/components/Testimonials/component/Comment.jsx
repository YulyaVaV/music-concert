import React from 'react';

import './Comment.scss';

import open from '../images/open.png';
import close from '../images/close.png';

export const Comment = ({comment, photo, name, email}) =>{
  return (
    <div className="comment">

    <div className="comment__content">
      <div className="comment__quotes">
        <img src={open} alt="quotes" className="comment__quotes comment__quotes--open"/>
      </div>
      <p className="comment__text">{comment}</p>
      <div className="comment__quotes">
        <img src={close} alt="quotes" className="comment__quotes comment__quotes--close"/>
      </div>
    </div>

      <div className="comment__image"><img src={photo} alt=""/></div>
      <h4 className="comment__name">{name}</h4>
      <a href="/" className="comment__email">{email}</a>
    </div>
  )
}

export default Comment;
