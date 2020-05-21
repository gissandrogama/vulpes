import React from 'react';

import './Sobre.css';
import Corsac from '../../assets/especies/Corsac.png'
import Pallida from '../../assets/especies/Pallida.png'
import Bengala from '../../assets/especies/Bengala.png'


function Sobre() {
  return (
    <>
    <div className="box">
    <h1>Quem Somos</h1>    
    <div className="sobre-content">
        <div className="sobre">        
            <img src={Corsac} alt="Corsac"/>
            <p>Corsac</p>
        </div>  
        <p>A Vulpes é um time competitivo, fundado em 16 de agosto de 2019.</p>.
        <p>A palavra Vulpes vem de um gênero dos canídeos, que são referidos como <strong>raposas verdadeiras</strong>. Do gênero Vulpes, existem 12 espécies.</p>. 
    </div>   
    </div>

    <div className="box">
    <h1>Dever</h1>    
    <div className="sobre-content">
        <div className="sobre">        
            <img src={Pallida} alt="Corsac"/>
            <p>Pallida</p>
        </div>  
        <p>Prover vivência e grandes emoções devido as conquistas e título alcançadas. Devido o trabalho profissional excelente.</p>
    </div>   
    </div>

    <div className="box">
    <h1>Valores</h1>    
    <div className="sobre-content">
        <div className="sobre">        
            <img src={Bengala} alt="Corsac"/>
            <p>Bengala</p>            
        </div>  
        <p>texto</p>
    </div>   
    </div>
    </>
  );
}

export default Sobre;
