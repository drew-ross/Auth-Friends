import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFriendValues = {
  name: '',
  age: 0,
  email: ''
};

const CreateFriendForm = ( {setFriends} ) => {
  
  const [ friendValues, setFriendValues ] = useState(initialFriendValues);

  const handleSubmit = e => {
    e.preventDefault();
    addFriend();
    setFriendValues(initialFriendValues);
  }

  const handleChanges = e => {
    setFriendValues({
      ...friendValues,
      [e.target.name]: e.target.value,
    });
  };

  const addFriend = () => {
    axiosWithAuth()
      .post('/api/friends', formattedFriendValues())
      .then(res => setFriends(res.data))
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
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default CreateFriendForm;