import React from 'react';

import './User.css';
import defaultPicture from './user_default.png';

interface UserProps {
  name: string,
  picture?: string
}

const User = ({ name, picture = defaultPicture } : UserProps) => (
  <>
    <img src={picture} alt={name} className="picture" />
    <span>{name}</span>
  </>
);

export default User;