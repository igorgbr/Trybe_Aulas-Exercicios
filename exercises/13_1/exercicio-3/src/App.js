import React from 'react';
import Lista from './Lista';
import './App.css';

function App() {
  const content = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
  ];
  return (
    <div className="App">
      <Lista content={content}>
        Lista de coisas aleatórias
      </Lista>
    </div>
  );
}

export default App;
