import React from 'react';

import './Sobre.css';
import Especie from '../../assets/especies/Corsac.png'

function Sobre() {
  return (
    <>    
    <div className="sobre-content">
        <div className="sobre">        
            <img src={Especie} alt="Avatar"/>
        </div>  
        <p>A Vulpes é um time competitivo, fundado em 16 de agosto de 2019.</p>.
        <p>A palavra Vulpes vem de um gênero dos canídeos, que são referidos como <strong>raposas verdadeiras</strong>. Do gênero Vulpes, existem 12 espécies.</p>.
        
    </div>   
    </>
  );
}

export default Sobre;
