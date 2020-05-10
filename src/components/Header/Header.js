import React from 'react';

import './Header.css';

import logo from '../../assets/logo3.png'

function Header() {
  return (
    <>    
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Vulpes"/>          
        </div>

        <div className="menu-desk">
          <ul className="menulist">
            <li className="menulist_item"><a href="/" className="menulink menulink--active">HOME</a></li>
            <li className="menulist_item"><a href="/loja" className="menulink">LOJA</a></li>
            <li className="menulist_item"><a href="#" className="menulink">EQUIPES</a></li>
            <li className="menulist_item"><a href="#" className="menulink">PARCEIROS</a></li>
            <li className="menulist_item"><a href="#" className="menulink">SOBRE</a></li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Header;
