import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Loja from './pages/Loja/Loja'
// import Equipes from './pages/Equipes'
// import Parceiros from './pages/Parceiros'
import Sobre from './pages/Sobre/Sobre'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/loja" component={Loja} />                
                <Route path="/sobre" component={Sobre} />                
            </Switch>
        </BrowserRouter>
    )
}