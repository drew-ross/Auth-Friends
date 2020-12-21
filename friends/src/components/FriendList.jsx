import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import CreateFriendForm from './CreateFriendForm';

const FriendList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className='FriendList'>
      <h2>Friends</h2>
      <CreateFriendForm setFriends={setFriends}/>
      {friends &&
        friends.map(friend => 
          <Friend 
          key={friend.id} 
          friend={friend} 
          setFriends={setFriends}
          />)
      }
    </div>
  );
};

export default FriendList;
