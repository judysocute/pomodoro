import React from 'react';
import Navbar from 'Components/Navbar';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';

function App() {
  return (
    <div className="bg-main h-screen app">
      <Navbar />
      {/* <Router>
        <Switch>
          <Route path="/">
            123
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
