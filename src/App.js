import React from 'react';
import Routes from './routes'

import Header from './components/Header'

import './App.css';

const items = [
  { link: '/', label: 'HOME', class: 'active' },
  { link: '/loja', label: 'LOJA', class: '' },
  { link: '/equipes', label: 'EQUIPES', class: ''},
  { link: '/parceiros', label: 'PARCEIROS', class: '' },
  { link: '/sobre', label: 'SOBRE', class: '' },
]

function App() {
  return (
    <>    
    <Header items = { items }  />
    <Routes />
    </>
  );
}

export default App;
