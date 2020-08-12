import React from 'react';
import Header from '../../components/Header';

function Home(){
    return (
        <div className="home-content">

            <div className="home-header">
                <Header selected="home" />
            </div>
            
            <div className="home-main">
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;