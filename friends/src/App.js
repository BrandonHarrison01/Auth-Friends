import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm'
import FriendsList from './components/FreindsList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/friends-list' component={FriendsList} />
      </header>
    </div>
  );
}

export default App;
