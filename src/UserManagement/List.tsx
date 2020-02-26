import React from 'react';
import User from './User';

const List = () => {
  return (
    <>
      <h1>List</h1>
      <ul>
        <li><User name="Anna" /></li>
        <li><User name="Marco" /></li>
        <li><User name="Vivi" /></li>
        <li><User name="Matteo" /></li>
      </ul>
    </>
  );
}

export default List;