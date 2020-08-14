import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'react-feather';

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
                        <h2>Beluomini</h2>
                    </Link>

                </div>

                
                <nav className="header-options">

                    <div className={selected==='home' ? "option" : ""} >
                        <Link to="/" style={{ textDecoration: 'none'}}><p>Home</p></Link>
                    </div>
                    <div className={selected==='portfolio' ? "option" : ""} >
                        <Link to="/portfolio" style={{ textDecoration: 'none' }} ><p>Portfolio</p></Link>
                    </div>
                    <div className={selected==='curriculum' ? "option" : ""} >
                        <Link to="/curriculum" style={{ textDecoration: 'none' }} ><p>Curriculum</p></Link>
                    </div>
                    
                </nav>

                <button className="menu"><Menu /></button>

                

            </div>
            <div className="side-bar">
                
            </div>
        </header>
    );
}

export default Header;