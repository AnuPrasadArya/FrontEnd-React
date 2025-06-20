/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transactions from './Components/Transactions';


function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Payment System Dashboard</h1>
      <Transactions />
      <hr />
      
    </div>
  );
}

export default App;


