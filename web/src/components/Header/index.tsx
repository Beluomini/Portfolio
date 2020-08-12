import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.png';

interface HeaderProps{
    selected: string;
}

const Header: React.FC<HeaderProps> = ({selected}) => {
    return(
        <header className="header">
            <div className="header-content">

                <div className="back-option">
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <img src={logoImg} alt=""/>
                    </Link>
                </div>

                <div className="header-options">

                    <div className={selected=='home' ? "option" : ""} >
                        <Link to="/" style={{ textDecoration: 'none'}}><p>Home</p></Link>
                    </div>

                    <div className={selected=='portfolio' ? "option" : ""} >
                        <Link to="/portfolio" style={{ textDecoration: 'none' }} ><p>Portfolio</p></Link>
                    </div>

                    <div className={selected=='curriculo' ? "option" : ""} >
                        <Link to="/curriculo" style={{ textDecoration: 'none' }} ><p>Curriculo</p></Link>
                    </div>
                    
                </div>

                

            </div>
        </header>
    );
}

export default Header;