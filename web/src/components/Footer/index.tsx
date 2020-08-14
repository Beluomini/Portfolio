import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';

import './styles.css';

function Footer(){
    return(
        <header className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <h2>Antisocial Pages</h2>
                </div>
                <div className="footer-social">

                    <a rel="noopener noreferrer" target="_blank" 
                        href="https://www.facebook.com/lucas.beluomini"
                    >
                        <Facebook />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" 
                        href="https://www.linkedin.com/in/lucas-beluomini-255701173/"
                    >
                        <Linkedin />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" 
                        href="https://www.instagram.com/lbeluomini/"
                    >
                        <Instagram />
                    </a>

                </div>
            </div>
        </header>
    );
}

export default Footer;