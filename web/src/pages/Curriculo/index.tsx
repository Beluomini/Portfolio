import React from 'react';
import Header from '../../components/Header';

function Curriculo(){
    return (
        <div className="curriculo-content">
            <div className="curriculo-header">
                <Header selected="curriculo" />
            </div>
            <div className="curriculo-main">
                <h1>Curriculo</h1>
            </div>
        </div>
    );
}

export default Curriculo;