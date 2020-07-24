import React from 'react';
import './App.css';
import Quote from './components/Quote';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Quote />
      </div>
    </BrowserRouter>
  );
}

export default App;
