import React from 'react';

import './Home.css';

import avatar from '../../assets/avatar.png'

function Home() {
  return (
    <>
    <div className="container">

      <div className="content">
          <h1>VULPES</h1>
          <p>Olá, nós somos um time</p>
          <p>competitivo de eSport.</p>

          <button className="btn">VER MAIS</button>    
      </div>   

      <div className="direita">        
        <img src={avatar} alt="Avatar"/>
      </div>  

    </div>
    </>
  );
}

export default Home;
