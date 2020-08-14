import React from 'react';
import Header from '../../components/Header';

import './styles.css';
import Footer from '../../components/Footer';

function Curriculum(){
    return (
        <div className="curriculum-content">

            <Header selected="curriculum" />

            <div className="curriculum-main">
                <h1>Curriculum</h1>
            </div>

            <Footer />

        </div>
    );
}

export default Curriculum;