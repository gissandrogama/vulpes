import React from 'react';
import './App.css';

import logo from './assests/logo3.png'
import avatar from './assests/avatar2.png'

function App() {
  return (
    <>
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Vulpes"/>          
        </div>

        <div className="menu">
          <ul className="menulist">
            <li className="menulist_item"><a href="#" className="menulink menulink--active">HOME</a></li>
            <li className="menulist_item"><a href="#" className="menulink">LOJA</a></li>
            <li className="menulist_item"><a href="#" className="menulink">EQUIPES</a></li>
            <li className="menulist_item"><a href="#" className="menulink">PARCEIROS</a></li>
            <li className="menulist_item"><a href="#" className="menulink">SOBRE</a></li>
          </ul>
        </div>

      </div>

      
      <div className="esquerda">        
        <h1>VULPES</h1>
        <p>Olá, nós somos um time</p>
        <p>competitivo de eSport.</p>

        <button>Ver mais</button>
      </div>
    </div>

    <div className="direita">        
      <img src={avatar} alt="Avatar"/>
    </div>
    </>
  );
}

export default App;
