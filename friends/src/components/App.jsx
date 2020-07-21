import React from 'react';
import HeaderNav from './HeaderNav';
import { Route } from 'react-router';

import FriendList from './FriendList';
import Login from './Login';

const App = () => {
  return (
    <div className="App">
      <HeaderNav />
      <Route path='/login' component={Login} />
      <Route path='/friends' component={FriendList} />
    </div>
  );
};

export default App;
