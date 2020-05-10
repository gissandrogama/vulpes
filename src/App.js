import React from 'react';
import Routes from './routes'

import Header from './components/Header/Header'

import './App.css';

function App() {
  return (
    <>
      <Header />     
      <div className="container2">
        <Routes />
      </div>    
    </>
  );
}

export default App;
