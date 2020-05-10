import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Loja from './pages/Loja'
// import Equipes from './pages/Equipes'
// import Parceiros from './pages/Parceiros'
// import Sobre from './pages/Sobre'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}