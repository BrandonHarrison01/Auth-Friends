import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={LoginForm} />
      </header>
    </div>
  );
}

export default App;
