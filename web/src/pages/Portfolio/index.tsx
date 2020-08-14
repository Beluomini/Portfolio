import React from 'react';
import Header from '../../components/Header';
import { Play } from 'react-feather';

import './styles.css';
import Footer from '../../components/Footer';

import uzumImg from '../../assets/uzum.jpg';
import trashCashImg from '../../assets/GeoTrash.png';
import proconsulteImg from '../../assets/logo_proconsulte.png';
import SewerScapeImg from '../../assets/SewerScapeLogo.png';

function Portfolio(){
    return (
        <div className="portfolio-content">

            <Header selected="portfolio" />

            <div className="portfolio-main">

                <h1>PROJECTS</h1>
                
                <div className="portfolio-grid">

                    <div className="portfolio-block">
                        <img src={uzumImg} alt="Logo Uzum"/>
                        <div className="portfolio-block-link">
                            <a rel="noopener noreferrer" target="_blank" 
                            href="/projects/U-ZUUM/index.html"
                            >
                                PLAY <Play />
                            </a>
                            
                        </div>
                    </div>
                    <div className="portfolio-block">
                        <img src={trashCashImg} alt="Logo Trash Cash"/>
                        <div className="portfolio-block-link">
                            <a rel="noopener noreferrer" target="_blank" 
                            href="/projects/TrashCash/index.html"
                            >
                                GO <Play />
                            </a>
                            
                        </div>
                    </div>
                    <div className="portfolio-block">
                        <img src={proconsulteImg} alt="Logo Uzum"/>
                        <div className="portfolio-block-link">
                            <a rel="noopener noreferrer" target="_blank" 
                            href="/projects/proconsulte/index.html"
                            >
                                GO <Play />
                            </a>
                            
                        </div>
                    </div>
                    <div className="portfolio-block">
                        <img src={SewerScapeImg} alt="Logo Uzum"/>
                        <div className="portfolio-block-link">
                            <a rel="noopener noreferrer" target="_blank" 
                            href="/projects/SewerScape/index.html"
                            >
                                PLAY <Play />
                            </a>
                            
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
            
        </div>
    );
}

export default Portfolio;