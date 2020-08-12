import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Curriculo from './pages/Curriculo';

function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/curriculo" component={Curriculo} />
        </BrowserRouter>
    );
}

export default Routes;