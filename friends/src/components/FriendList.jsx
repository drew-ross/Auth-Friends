import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = props => {
  const [friends, setFriends] = useState({});

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
    </div>
  );
};

export default FriendList;
