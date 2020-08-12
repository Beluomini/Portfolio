import React from 'react';
import Header from '../../components/Header';

function Portfolio(){
    return (
        <div className="bio-content">
            <div className="bio-header">
                <Header selected="portfolio" />
            </div>
            <div className="bio-main">
                <h1>Portfolio</h1>
            </div>
        </div>
    );
}

export default Portfolio;