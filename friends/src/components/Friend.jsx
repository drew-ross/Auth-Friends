import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import UpdateFriendForm from './UpdateFriendForm';

const Friend = ({ friend, setFriends }) => {

  const [ isEditing, setIsEditing ] = useState(false);

  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${friend.id}`)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
  }

  return (
    <div className='Friend'>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {isEditing && <UpdateFriendForm friend={friend} setFriends={setFriends} setIsEditing={setIsEditing}/>}
    </div>
  );
};

export default Friend;