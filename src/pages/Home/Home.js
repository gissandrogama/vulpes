import React from 'react';
import {Link} from 'react-router-dom'; 

import './Home.css';

import avatar from '../../assets/avatar.png'

function Home() {
  return (
    <>
    <div className="container">

      <div className="content">
          <h1 className="titulo">VULPES</h1>
          <p>Olá, nós somos um time competitivo de eSport.</p>
          
          <Link to="/sobre">
            <button className="btn">VER MAIS</button>      
          </Link>
      </div>   

      <div className="direita">        
        <img src={avatar} alt="Avatar"/>
      </div>  

    </div>
    </>
  );
}

export default Home;
