import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Curriculum from './pages/Curriculum'

function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/curriculum" component={Curriculum} />
        </BrowserRouter>
    );
}

export default Routes;