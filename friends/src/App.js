import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm'
import FriendsList from './components/FreindsList';

function App() {

  const PrivateRoute = ({ component: Component, ...spread }) => (
    <Route 
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} {...spread} />
        ) : (
          <Redirect to='/' />
        )
      } 
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={LoginForm} />
        <PrivateRoute exact path='/friends-list' component={FriendsList} />
      </header>
    </div>
  );
}

export default App;
