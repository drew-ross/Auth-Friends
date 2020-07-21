import React from 'react';
import HeaderNav from './HeaderNav';
import { Route } from 'react-router';

import Login from './Login';

const App = () => {
  return (
    <div className="App">
      <HeaderNav />
      <Route path='/login' component={Login} />
    </div>
  );
};

export default App;
