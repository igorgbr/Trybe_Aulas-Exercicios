import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (listItems) => {
  const valores = listItems.map(element => 
  <li>{element}</li>
  );
  return (
    <ul>{valores}</ul>
  );
}
const arrayComp = ['acordar', 'escovar os dentes', 'estudar', 'tomar banho', 'dormir'];
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
          {task(arrayComp)}
        </a>
      </header>
    </div>
  );
}

export default App;
