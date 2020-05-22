import React from 'react';


import logo from '../assets/logo3.png'

import './Header.css';

function Header(items) {
    const itens_menu = items.items

  return (
    <>
    <nav className="menu">
      <div className="logo">
          <img src={logo} alt="Vulpes"/>          
      </div>

      <ul className="lista">
      {itens_menu.map( item => (

          <li key={item.link}><a className={item.class} href={item.link} >{item.label}</a></li>
          ))}
      </ul>
    </nav>
    </>
  );
}

export default Header;