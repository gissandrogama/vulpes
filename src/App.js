import React from 'react';
import Routes from './routes'

import logo from './assets/logo3.png'

import './App.css';

function App() {
  return (
    <>
    <nav className="menu">
      <div className="logo">
          <img src={logo} alt="Vulpes"/>          
      </div>

      <ul className="container">
        <li><a className="active" href="/">HOME</a></li>
        <li><a href="/loja">LOJA</a></li>
        <li><a href="#">EQUIPES</a></li>
        <li><a href="#">PARCEIROS</a></li>
        <li><a href="/sobre">SOBRE</a></li>
      </ul>
    </nav>      
    <Routes />
    </>
  );
}

export default App;
