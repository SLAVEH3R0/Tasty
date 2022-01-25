import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Samuel</p>
        <img
          src="https://chaireafd.uqat.ca/assets/images/membres/SamuelRobin.jpg"
          alt="Sam in the Robin Wood"
          width="500"
          height="600"
        ></img>
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
}

export default App;
