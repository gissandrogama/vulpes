import React from 'react';

import './Loja.css';

import logo from '../../assets/logo2.png'

function Loja() {
  return (
    <>    
    <div className="loja-content">
        <div className="logo-loja">        
            <img src={logo} alt="Avatar"/>
        </div>  
        <p>Estamos desenvolvendo os melhores produtos. Aguarde ...</p>.
    </div>   
    </>
  );
}

export default Loja;
