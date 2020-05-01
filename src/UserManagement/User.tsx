import React from 'react';

import './User.css';
import defaultPicture from './user_default.png';
import players from "./players.json";

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


// const User = () => { 
//   players.map(element => (
//     <div>
//       <img src={element.picture!} />
//       <span> {element.name} </span>
//     </div>
//   ));
// }

export default User;
