import React from 'react';

import './Posts.scss';

import like from '../images/like.png';
import chat from '../images/chat.png';

export const Posts = ({img, text, tags}) => {
  return (
    <div className="posts">
      <div className="posts__image">
        <img src={img} alt="concert" className="posts__image"/>
      </div>

      <div className="posts__active">
        <div className="posts__activ"><img src={like} alt="like" />412</div>
        <div className="posts__activ"><img src={chat} alt="chat" />140</div>
      </div>

      <h4 className="posts__title">{text}</h4>
      <span className="posts__tags">{tags}</span>
    </div>
  )
}

export default Posts;