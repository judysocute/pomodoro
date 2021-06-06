// @flow
import React from 'react';
import Navbar from 'Components/Navbar';
import MainClock from 'features/tasks/MainClock';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="bg-main h-screen app">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <MainClock />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
