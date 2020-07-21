import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div className='Friend'>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default Friend;