import React from 'react';
import classnames from 'classnames'

import './PostCard.css'

const PostCard = ({title, image, full, className}) => (
  <div className={classnames(
    'PostCard',
    { full },
    className
  )}>
    {title && (
      <h3>{title}</h3>
    )}

    <img src={image} alt=""/>
  </div>
);

export default PostCard;
