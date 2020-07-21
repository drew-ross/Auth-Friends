import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CreateFriendForm = ( {setFriends, friend, setIsEditing} ) => {
  
  const [ friendValues, setFriendValues ] = useState(friend);

  const handleSubmit = e => {
    e.preventDefault();
    updateFriend();
  }

  const handleChanges = e => {
    setFriendValues({
      ...friendValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = e => {
    e.preventDefault();
    setIsEditing(false);
  }

  const updateFriend = () => {
    axiosWithAuth()
      .put(`/api/friends/${friend.id}`, formattedFriendValues())
      .then(res => {
        setFriends(res.data);
        setIsEditing(false);
      })
      .catch(err => console.log(err));
  };

  const formattedFriendValues = () => {
    return {
      name: friendValues.name.trim(),
      age: Number(friendValues.age),
      email: friendValues.email.trim()
    }
  }

  return (
    <div className='CreateFriendForm'>
      <h2>Edit Friend</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='input'
          required
          value={friendValues.name}
          onChange={handleChanges}
        />
        <br />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          name='age'
          type='number'
          min='0'
          value={friendValues.age}
          onChange={handleChanges}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          value={friendValues.email}
          onChange={handleChanges}
        />
        <br />
        <button type='submit'>Update</button>
      </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CreateFriendForm;